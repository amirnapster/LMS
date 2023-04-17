import * as fs from 'fs'
import path from 'path'
import glob from 'glob'
import frontmatter from 'front-matter'
import * as types from './interface'

function contentFilesInPath(dir: string) {
  const globPattern = `${dir}/*.md`
  return glob.sync(globPattern)
}

function fileToUrl(file: string) {
  if (!file.startsWith('page')) return null

  const urlSlice = file.slice('page'.length)
  const url = urlSlice.split('.')[0]
  if (url.endsWith('/index')) {
    return url.slice(0, -6) || '/'
  }
  return url
}

function urlToFilePairs() {
  const pageFiles = contentFilesInPath('page')
  return pageFiles.map((file: string) => [fileToUrl(file), file])
}

export function urlToFile(url: string) {
  const urlToFiles = Object.fromEntries(urlToFilePairs())

  return urlToFiles[url]
}

function readContent(file: string): types.Document {
  const rawContent = fs.readFileSync(file, 'utf8')
  let content = null
  switch (path.extname(file).substring(1)) {
    case 'md':
      // eslint-disable-next-line no-case-declarations
      const parsedMd = frontmatter<Record<string, any>>(rawContent)
      content = {
        ...parsedMd.attributes,
        body: parsedMd.body,
        type: 'Page',
      }
      break
    case 'json':
      content = JSON.parse(rawContent)
      break
    default:
      throw Error(`Unhandled file type: ${file}`)
  }

  content._id = file
  content.__url = fileToUrl(file)
  return content
}
export function urlToContent(url: string) {
  const urlToFiles = Object.fromEntries(urlToFilePairs())

  const file = urlToFiles[url]
  return readContent(file)
}

export function pagesByType(contentType: types.DocumentTypeNames) {
  const result: Record<string, types.Document> = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [url, file] of urlToFilePairs()) {
    if (file) {
      const content = readContent(file)

      if (url && content.type === contentType) result[url] = content
    }
  }
  return result
}

export function siteConfig() {
  // let c: types.Config = { _id: 'cofig', type: 'Config' }
  return {
    _id: 'string',
    __url: null,
    type: 'Config',
    favicon: '',
  } as types.Config
}
