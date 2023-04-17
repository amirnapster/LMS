interface SvgProps {
  id: string
  className?: string
}

const SvgSprite = ({ id, className }: SvgProps) => (
  <svg className={className} role='img'>
    <use xlinkHref={`#${id}`} />
  </svg>
)

SvgSprite.defaultProps = {
  className: '',
}

export default SvgSprite
