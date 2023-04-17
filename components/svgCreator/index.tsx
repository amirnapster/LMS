export const svgCreator = (
  color: string,
  path: string,
  width = 24,
  height = 24
) => (
  <svg
    width={width}
    height={height}
    fill={color}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d={path} fill={color} />
  </svg>
)
