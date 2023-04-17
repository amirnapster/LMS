import * as React from 'react'
import type * as types from 'utils/interface'
import MarkdownToJsx from 'markdown-to-jsx'

export type Props = types.HeaderSection & types.StackbitFieldPath

export const HeaderSection: React.FC<Props> = (props) => {
  const { header, body, 'data-sb-field-path': fieldPath } = props
  return (
    <div data-sb-field-path={fieldPath}>
      <h1 data-sb-field-path='.header'>{header}</h1>
      <MarkdownToJsx
        options={{ forceBlock: true, forceWrapper: true }}
        data-sb-field-path='.body'
      >
        {body}
      </MarkdownToJsx>
    </div>
  )
}
