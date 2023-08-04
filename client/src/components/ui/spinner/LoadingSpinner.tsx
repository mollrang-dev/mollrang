import styles from './LoadingSpinner.module.scss';
import {ReactElement} from "react";
import classNames from "classnames";

interface Props {
  isLoading: boolean;
}

export const LoadingSpinner = (props: Props): ReactElement => {
  const {isLoading} = props;
  return (
    <div className={classNames(styles.spinner_wrapper, !isLoading && 'hide')}>
      <div className={styles.spinner}/>
    </div>
  )
}