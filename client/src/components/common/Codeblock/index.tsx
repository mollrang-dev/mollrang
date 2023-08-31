import {ReactElement} from "react"
import styles from './CodeBlock.module.scss';

interface Props {
  label?: string
  code: string
}

export const CodeBlock = (props: Props): ReactElement => {
  return (
    <pre className={styles.code_block}>
      <p className={styles.code_label}>{props.label}</p>
      {props.code}
    </pre>
  )
}