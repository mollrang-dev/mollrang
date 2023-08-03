import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <div className={styles.spinner}/>
    </div>
  )
}