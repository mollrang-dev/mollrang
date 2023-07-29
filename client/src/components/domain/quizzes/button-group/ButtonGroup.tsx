import {OXButton} from "@components/ui/OXButton/OXButton";
import React, {ReactElement} from "react";
import styles from './ButtonGroup.module.scss';

export const ButtonGroup = (): ReactElement => {
  return (
    <div className={styles.ox_button_group}>
      <OXButton variant={'O'}/>
      <OXButton variant={'X'}/>
    </div>
  )
}