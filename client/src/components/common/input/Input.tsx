import { ChangeEvent, ComponentProps, ReactElement } from 'react'
import styles from './Input.module.scss'
import { Typography } from '@components/common/typography/Typography'

type InputValue = string | number | ReadonlyArray<string>
type InputChangeEvent = ChangeEvent<HTMLInputElement>
type InputVariant = 'default' | 'input_button' | 'checkbox'

interface InputProps extends ComponentProps<'input'> {
  variant?: InputVariant
  label?: string
  value?: InputValue
  onChange?: (event: InputChangeEvent) => void
}

export const Input = (props: InputProps): ReactElement => {
  const {
    variant = 'default',
    label,
    placeholder,
    disabled,
    className,
    value,
    onChange,
    id,
    type = 'text',
    ...rest
  } = props

  const onChangeHandler = (event: InputChangeEvent): void => {
    onChange && onChange(event)
  }

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        className={`${styles[variant]} ${className}`}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...rest}
      />
      {label && type === 'checkbox' && (
        <Typography className={styles.checkbox_label}>{label}</Typography>
      )}
      {label && type !== 'checkbox' && (
        <Typography className={'pb-8'} weight={'bold'}>
          {label}
        </Typography>
      )}
    </label>
  )
}
