import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://proback.namatek.com/swagger/v1/swagger.json',
  apiFile: './libs/redux/services/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './libs/redux/services/karnama.ts',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
}

export default config
