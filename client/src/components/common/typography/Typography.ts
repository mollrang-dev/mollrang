import classNames from 'classnames'
import styles from './Typography.module.scss'
import React, { ComponentProps, ReactElement } from 'react'

interface Props extends ComponentProps<'p'> {
  variant?: Variant
  weight?: FontWeight
  color?: FontColor
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
}

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'caption'
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type FontColor = 'black100' | 'black200' | 'black300' | 'gray100' | 'primary' | 'white'

export const Typography = (props: Props): ReactElement => {
  const {
    className,
    variant = 'body1',
    weight = 'regular',
    color = 'black',
    children,
    as,
    ...rest
  } = props

  const element: { [key in Variant]: string } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body1: 'p',
    body2: 'p',
    caption: 'p',
  }

  return React.createElement(
    as || element[variant],
    {
      className: classNames(styles[variant], styles[weight], styles[color], className),
      ...rest,
    },
    children
  )
}
