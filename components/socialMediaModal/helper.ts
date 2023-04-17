import { NavigateType } from './interface'

export const socialMedias = [
  { title: 'mail', svg: 'Email' },
  { title: 'linkedin', svg: 'Linkdin' },
  { title: 'telegram', svg: 'Telegram' },
  { title: 'twitter', svg: 'Twitter' },
  { title: 'whatsapp', svg: 'Whatsapp' },
  { title: 'facebook', svg: 'Facebook' },
]

export const navigate: NavigateType = (
  pattern,
  name,
  id,
  textToShare,
  mode
) => {
  switch (pattern) {
    case 'linkedin': {
      return `https://www.linkedin.com/sharing/share-offsite/?url=https://rasm.io/company/${
        mode === 'company' ? id : id?.toString(16)
      }/${encodeURI(name as string)}/`
    }

    case 'whatsapp': {
      return `https://wa.me/?text=${encodeURI(
        `${textToShare}: https://rasm.io/company/${
          mode === 'company' ? id : id?.toString(16)
        }/${encodeURI(name as string)}/`
      )}`
    }

    case 'telegram': {
      return `https://telegram.me/share/url?url=${encodeURI(
        `https://rasm.io/company/${
          mode === 'company' ? id : id?.toString(16)
        }/${encodeURI(name as string)}/&text=${textToShare}`
      )}`
    }

    case 'twitter': {
      return `https://twitter.com/intent/tweet?url=${encodeURI(
        `https://rasm.io/company/${
          mode === 'company' ? id : id?.toString(16)
        }/${encodeURI(name as string)}/&text=${textToShare}`
      )}`
    }

    case 'facebook': {
      return `http://www.facebook.com/sharer.php?link=https://rasm.io/company/${
        mode === 'company' ? id : id?.toString(16)
      }/${encodeURI(name as string)}/`
    }

    case 'mail': {
      return `mailto:?body=${encodeURI(
        `${textToShare}: https://rasm.io/company/${
          mode === 'company' ? id : id?.toString(16)
        }/${encodeURI(name as string)}/`
      )}`
    }
    default:
      return ''
  }
}
