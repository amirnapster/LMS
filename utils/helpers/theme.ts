export type Themes = 'default' | 'alt' | 'dark'

export type KeyColors =
  | '--primary'
  | '--secondary'
  | '--bg-color'
  | '--text-color'
  | '--white-gold-gradient'

type Pallets = Record<KeyColors, string | null>

type ThemeOptions = Record<Themes, Pallets>

const themeOptions: ThemeOptions = {
  default: {
    '--primary': null,
    '--secondary': null,
    '--bg-color': null,
    '--text-color': null,
    '--white-gold-gradient': null,
  },
  alt: {
    '--primary': 'purple',
    '--secondary': 'yellow',
    '--bg-color': 'black',
    '--text-color': 'white',
    '--white-gold-gradient': '315deg, #e13019 14.64%, #ec8078 85.36%',
  },
  dark: {
    '--primary': 'cyan',
    '--secondary': 'orange',
    '--bg-color': 'black',
    '--text-color': 'white',
    '--white-gold-gradient':
      ' 135deg, #0d72ff 14.64%, #9b69c6 50.94%, #e13019 85.36%',
  },
}

export default themeOptions
