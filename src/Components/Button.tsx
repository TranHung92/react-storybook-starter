import * as React from 'react'

export interface Props {
  label: string
  onClick: any
}

export default (props: Props) => (
  <button onClick={props.onClick}>{props.label}</button>
)
