import Cookies from 'js-cookie'
import panelStyles from 'components/ui/Panel/panel.module.scss'
import themeOptions, { type KeyColors, type Themes } from './theme'

export const scrollHandler = (x: number, y: number) => window.scrollTo(x, y)

export const numberSeparator = (num?: string | number) =>
  num?.toLocaleString(undefined, { maximumFractionDigits: 0 })

export const changeBodyDir = async (locale?: string) => {
  document.body.dir = locale === 'en-US' ? 'ltr' : 'rtl'
  const icons = await document.getElementsByClassName('svg-icon')

  Object.keys(icons).forEach((icon) => {
    const item = icons[parseInt(icon, 10)]
    if (locale === 'en-US') item.classList.add('rotate180')
    else item.classList.remove('rotate180')
  })
}

export const setTheme = (theme: Themes) => {
  Cookies.set('theme', theme)
  const root = document.documentElement

  if (root) {
    Object.keys(themeOptions[theme]).forEach((key) => {
      const color = themeOptions[theme][key as KeyColors]
      root.style.setProperty(key, color)
    })
  }
}

export const debounce = <Params extends any[]>(
  func: (...args: Params) => any,
  timeout?: number
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout || 1000)
  }
}

export const cloneDeep = <Params>(data: Params) => structuredClone(data)

export const omit = <Obj extends object, Keys extends string | string[]>(
  obj: Obj,
  keys: Keys
) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)))

export const isEmpty = <Obj>(value: Obj) => {
  if (value == null) return true
  return !(Object.keys(value).length > 0)
}

export const closePanel = (cn: string) => {
  const collapse = document.getElementsByClassName(cn)?.[0]
  const panel = collapse?.querySelector("[data-selector='panel-active']")

  if (panel) {
    const panelContent = panel.querySelector("[data-selector='panel-content']")
    panel.removeAttribute('data-selector')
    setTimeout(
      () =>
        panelContent?.classList.remove(panelStyles['panel__content--active']),
      350
    )
  }
}
export const copyToClipBoard = (text: string) =>
  navigator.clipboard.writeText(text)

export const addGoogleEvent = (arg: any) => {
  // @ts-ignore
  if (window?.dataLayer) {
    // @ts-ignore
    window.dataLayer.push(arg)
  }
  // @ts-ignore
  if (window?.clarity) {
    const v = Object.keys(arg).length > 1 ? arg[Object.keys(arg)[1]] : 'true'
    // @ts-ignore
    window.clarity('set', arg.event, v)
  }
}

