/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/Search/Search': {
    get: operations['Search']
  }
}

export interface components {
  schemas: {
    ElasticSearchAllModel: {
      /** Format: int64 */
      entityId?: number
      id?: string | null
      titleFa?: string | null
      titleEn?: string | null
      keywords?: string | null
      similarity?: string | null
      subtitle?: string | null
      pictureUrl?: string | null
      /** Format: date-time */
      registrationDate?: string | null
      /** Format: date-time */
      date?: string | null
      ceo?: string | null
      description?: string | null
      tagline?: string | null
      placeOfIssue?: string | null
      owner?: string | null
      ownerLink?: string | null
      /** Format: int32 */
      views?: number
      /** Format: int32 */
      companyCount?: number
      link?: string | null
      /** Format: int32 */
      favoriteListEntityCount?: number
      location?: components['schemas']['GeoLocation']
      entityType?: components['schemas']['Type']
    }
    ElasticSearchAllModelQueryDto: {
      companies?: components['schemas']['ElasticSearchAllModelTuple']
      people?: components['schemas']['ElasticSearchAllModelTuple']
      news?: components['schemas']['ElasticSearchAllModelTuple']
      iPs?: components['schemas']['ElasticSearchAllModelTuple']
      products?: components['schemas']['ElasticSearchAllModelTuple']
      //  lists?: components["schemas"]["ElasticSearchAllModelTuple"];
    }
    ElasticSearchAllModelTuple: {
      data?: components['schemas']['ElasticSearchAllModel'][] | null
      /** Format: int64 */
      count?: number
    }
    GeoLocation: {
      /** Format: double */
      lat?: number
      /** Format: double */
      lon?: number
    }
    /**
     * Format: int32
     * @enum {integer}
     */
    Type: 1 | 2 | 3 | 4 | 6 | 15
  }
}

export interface operations {
  Search: {
    parameters: {
      query: {
        textSearch?: string
        type?: components['schemas']['Type']
        page?: number
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json': components['schemas']['ElasticSearchAllModelQueryDto']
        }
      }
    }
  }
}

export interface external {}
