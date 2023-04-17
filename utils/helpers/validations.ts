export const regex = {
  device: /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^(\+98|0)?9\d{9}$/im,
  // fullname: /^.+ .+$/,
  fullname: /^[a-zA-Zآ-ی]+(([',. -][a-zA-Zآ-ی ])?[a-zA-Zآ-ی]*)*$/g,
  otpCode: /^[0-9]{6}$/g,
  numberOnly: /^[0-9]+$/g,
  nationalCode: /^[0-9]{10}$/g,
  registrationNo: /^[0-9]{1,6}$/g,
  telephoneNumber: /^0[0-9]{2,}[0-9]{8,}$/g,
}

export const validation = {
  REGISTER_PASSWORD: {
    required: 'error.password',
    minLength: { value: 8, message: 'error.password.length' },
  },
  LOGIN_EMAIL_USERNAME: {
    required: 'error.username.required',
    validate: {
      isValid: (value?: string) => {
        if (value) {
          const phoneNumber = {
            message: 'error.username.phoneNumber',
            valid: () =>
              regex['phoneNumber'].test(String(value).toLowerCase().trim()),
          }
          const email = {
            message: 'error.username.email',
            valid: () =>
              regex['email'].test(String(value).toLowerCase().trim()),
          }
          if (phoneNumber.valid() || email.valid()) return true
          if (
            !phoneNumber.valid() &&
            (!Number.isNaN(parseInt(value, 10)) || value.charAt(0) === '+')
          ) {
            return phoneNumber.message
          }
          return email.message
        }
        return true
      },
    },
  },
  LOGIN_PASSWORD: {
    required: 'error.password.required',
  },
  CONFIRM_CODE: {
    required: 'error.code.required',
    pattern: { value: regex['otpCode'], message: 'error.code' },
  },
  matchPassword: (currentPassword: string) => ({
    validate: (value: string) =>
      value === currentPassword || 'error.password.match',
  }),
  CONFIRM_COMPANY_CODE: {
    required: 'error.company.code.required',
    validate: (value: string) =>
      value.length === 11 || 'error.company.code.length',
  },
  CONFIRM_CEO_PHONE_NUMBER: {
    required: 'error.ceo.phone.required',
    pattern: {
      value: regex['phoneNumber'],
      message: 'error.ceo.phone.invalid',
    },
  },
  FULL_NAME: {
    required: 'error.fullname',
    pattern: {
      value: regex['fullname'],
      message: 'error.fullname.invalid',
    },
  },
  MESSAGE: {
    required: 'error.message.required',
  },
  REQUIRED: {
    required: true,
  },
  required: (text: string) => ({
    required: text,
  }),
  INVOICE_USERNAME: {
    required: 'error.username.required',
  },
  INVOICE_COMPANY_NAME: {
    required: 'error.cnpmany.name.required',
  },
  INVOICE_NATIONAL_CODE: {
    required: 'error.invoice.national.code.required',
    pattern: {
      value: regex['nationalCode'],
      message: 'error.invoice.national.code.invalid',
    },
  },
  INVOICE_POSTAL_CODE: {
    required: 'error.invoice.postal.code.required',
    pattern: {
      value: regex['nationalCode'],
      message: 'error.invoice.postal.code.invalid',
    },
  },
  INVOICE_CITY: {
    required: 'error.address.required',
  },
  INVOICE_ADDRESS: {
    required: 'error.address.required',
  },
  REGISTRATION_NO: {
    required: 'error.registration.required',
    pattern: {
      value: regex['registrationNo'],
      message: 'error.registration.invalid',
    },
  },
  INVOICE_NATIONAL_ID: {
    required: 'error.company.code.required',
  },
  INVOICE_ECONOMIC_CODE: {
    required: 'error.economic.code.required',
  },
  INVOICE_TELEPHONE: {
    required: 'error.phone.required',
    pattern: {
      value: regex['telephoneNumber'],
      message: 'error.invoice.phone.invalid',
    },
  },
}
