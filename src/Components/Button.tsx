import * as React from 'react'

export interface Props {
  label: string
  onClick: any
}

const Button = (props: Props) => (
  <button onClick={props.onClick}>{props.label}</button>
)

export default Button
