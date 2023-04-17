import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://sandboxback.rasm.io/swagger/AllV3/swagger.json',
  apiFile: './libs/redux/services/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './libs/redux/services/v3.ts',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
}

export default config
