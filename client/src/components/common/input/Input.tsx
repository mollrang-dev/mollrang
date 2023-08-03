import {ChangeEvent, ComponentProps, ReactElement, useEffect, useState} from 'react'
import styles from './Input.module.scss'
import {Typography} from '@components/common/typography/Typography'
import classNames from "classnames";

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
  //TODO: Test code를 통과시킬려면 input 의 고유 state가 필요하다.
  // 근데 고유 상태를 가지게 되면 value 초기화를 할 경우 input의 state로 함께 초기화를 해줘야 화면 상에서 Text가 사라진다.
  // 그래서 state를 지웠던거였는데...흠
  const [inputValue, setInputValue] = useState<string>('')
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

  useEffect(() => {
    onChangeEvent();
  }, [value])

  const onChangeEvent = () => {
    setInputValue(inputValue);
  }

  const onChangeHandler = (event: InputChangeEvent): void => {
    if (event.target.value) setInputValue(event.target.value)
    onChange && onChange(event)
  }

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        className={classNames(styles[variant], className)}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type={type}
        value={inputValue}
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
