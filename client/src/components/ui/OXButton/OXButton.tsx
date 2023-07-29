import React, {ComponentProps, ReactElement} from "react";
import {Icon} from "@components/common/icon/Icon";
import styles from './OXButton.module.scss';

type ButtonVariant = 'O' | 'X'

interface ButtonProps extends ComponentProps<"button"> {
  variant: ButtonVariant;
}

export const OXButton = (props: ButtonProps): ReactElement => {
  const {variant} = props;
  return (
    <button className={styles[variant]}>
      <Icon type={variant} width={65} height={65}/>
    </button>
  )
}
