import {ReactElement} from 'react'
import styles from './ProgressBar.module.scss'

interface Props {
  currentTab: number
  maxCount: number
}

/**
 * max = 문항 길이만큼
 * value = 현재 탭
 * @constructor
 */
export const ProgressBar = (props: Props): ReactElement => {
  const {currentTab = 0, maxCount = 0} = props
  return (
    <div className={styles.progressbar_container}>
      <progress
        value={currentTab + 1}
        max={maxCount}
        className={styles.progressbar}
      />
    </div>
  )
}
