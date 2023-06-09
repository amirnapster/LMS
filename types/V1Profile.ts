/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/Profile/ShowProfile': {
    get: operations['ShowProfile']
  }
  '/Profile/ChangeUserName': {
    post: operations['ChangeUserName']
  }
  '/Profile/ChangePassword': {
    post: operations['ChangePassword']
  }
  '/Profile/UnSubscribeSms': {
    post: operations['UnSubscribeSms']
  }
  '/Profile/SubscribeSms': {
    post: operations['SubscribeSms']
  }
  '/Profile/UnSubscribeEmail': {
    post: operations['UnSubscribeEmail']
  }
  '/Profile/SubscribeEmail': {
    post: operations['SubscribeEmail']
  }
  '/Profile/GetPaymentsAsync': {
    get: operations['GetPaymentsAsync']
  }
  '/Profile/GetCommentsAsync': {
    get: operations['GetCommentsAsync']
  }
  '/Profile/RemoveComment': {
    post: operations['RemoveComment']
  }
  '/Profile/EntityPageVisitsAsync': {
    get: operations['EntityPageVisitsAsync']
  }
  '/Profile/LastSearchOfPremmiumUsageAsync': {
    get: operations['LastSearchOfPremmiumUsageAsync']
  }
  '/Profile/SetVerification': {
    post: operations['SetVerification']
  }
  '/Profile/SetUserName': {
    post: operations['SetUserName']
  }
  '/Profile/RemoveSubPremium': {
    post: operations['RemoveSubPremium']
  }
  '/Profile/UploadProfileImage': {
    post: operations['UploadProfileImage']
  }
  '/Profile/ChangeFullName': {
    post: operations['ChangeFullName']
  }
}

export interface components {
  schemas: {
    ChangeFullNameForm: {
      fullName?: string | null
    }
    ChangePassworDto: {
      oldPassword?: string | null
      newPassword?: string | null
      confirmPassword?: string | null
    }
    DeleteCommentDto: {
      /** Format: int32 */
      id?: number
    }
    ProfileDto: {
      newUserName?: string | null
    }
    ProfileRemoveSubPremiumForm: {
      targetUserId?: string | null
    }
    SetSubPremiumAccess: {
      subUserName?: string | null
    }
  }
}

export interface operations {
  ShowProfile: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  ChangeUserName: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['ProfileDto']
        'application/json': components['schemas']['ProfileDto']
        'text/json': components['schemas']['ProfileDto']
        'application/*+json': components['schemas']['ProfileDto']
      }
    }
  }
  ChangePassword: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['ChangePassworDto']
        'application/json': components['schemas']['ChangePassworDto']
        'text/json': components['schemas']['ChangePassworDto']
        'application/*+json': components['schemas']['ChangePassworDto']
      }
    }
  }
  UnSubscribeSms: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  SubscribeSms: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  UnSubscribeEmail: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  SubscribeEmail: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  GetPaymentsAsync: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  GetCommentsAsync: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  RemoveComment: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['DeleteCommentDto']
        'application/json': components['schemas']['DeleteCommentDto']
        'text/json': components['schemas']['DeleteCommentDto']
        'application/*+json': components['schemas']['DeleteCommentDto']
      }
    }
  }
  EntityPageVisitsAsync: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  LastSearchOfPremmiumUsageAsync: {
    responses: {
      /** Success */
      200: unknown
    }
  }
  SetVerification: {
    parameters: {
      query: {
        userName?: string
      }
    }
    responses: {
      /** Success */
      200: unknown
    }
  }
  SetUserName: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['SetSubPremiumAccess']
        'application/json': components['schemas']['SetSubPremiumAccess']
        'text/json': components['schemas']['SetSubPremiumAccess']
        'application/*+json': components['schemas']['SetSubPremiumAccess']
      }
    }
  }
  RemoveSubPremium: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['ProfileRemoveSubPremiumForm']
        'application/json': components['schemas']['ProfileRemoveSubPremiumForm']
        'text/json': components['schemas']['ProfileRemoveSubPremiumForm']
        'application/*+json': components['schemas']['ProfileRemoveSubPremiumForm']
      }
    }
  }
  UploadProfileImage: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          ProfilePicture?: string
        }
      }
    }
  }
  ChangeFullName: {
    responses: {
      /** Success */
      200: unknown
    }
    requestBody: {
      content: {
        'application/json-patch+json': components['schemas']['ChangeFullNameForm']
        'application/json': components['schemas']['ChangeFullNameForm']
        'text/json': components['schemas']['ChangeFullNameForm']
        'application/*+json': components['schemas']['ChangeFullNameForm']
      }
    }
  }
}

export interface external {}
