import TagManager from 'react-gtm-module'

export const gtm = () => {
  if (
    typeof document !== 'undefined'
  ) {
    TagManager.initialize({ gtmId: 'GTM-PP4DC86' })
    // const msg =
    //   '%c jobs@rasm.io سلام 👋! اگه فک می‌کنی می‌تونی تو نماتک تأثیرگذار باشی رزومتو ایمیل کن'
    // const styles = [
    //   'font-size: 20px',
    //   'font-family: calibri',
    //   'background: white',
    //   'display: inline-block',
    //   'direction: rtl',
    //   'padding: 8px 19px',
    //   'border: 1px dashed;',
    // ].join(';')
    // console.log(msg, styles)
  }
}
