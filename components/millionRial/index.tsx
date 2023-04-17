import Tooltip from 'components/ui/Tooltip'
import { numberSeparator } from 'utils/helpers/global'

import type { IMillionRialProps } from './inteface'

const MillionRialComponent = ({ price }: IMillionRialProps) =>
  price ? (
    <Tooltip placement='top' content={`${numberSeparator(+price)} ریال`}>
      {numberSeparator(price / 1000000) as string}
    </Tooltip>
  ) : (
    <span>-</span>
  )

export default MillionRialComponent
