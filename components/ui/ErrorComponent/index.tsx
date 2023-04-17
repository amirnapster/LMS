import type { ErrorBoundaryState } from 'components/errorBoundary'
// const { errorInfo, error } = props

const ErrorComponent = (props: ErrorBoundaryState) => (
  <div
    style={{
      color: 'red',
      border: '1px solid red',
      borderRadius: '0.25rem',
      margin: '0.5rem',
      padding: '0.5rem',
    }}
  >
    Sorry.. there was an error
  </div>
)

export default ErrorComponent
