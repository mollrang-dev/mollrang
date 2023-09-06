import {AnimatePresence, motion} from "framer-motion";
import styles from './BottomModal.module.scss';

interface Props {
  isOpen: boolean;
  onRequestClose: (payload: boolean) => void;
}

export const BottomModal = (props: Props) => {
  const {isOpen, onRequestClose} = props;
  const onclick = () => {
    onRequestClose(false)
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 1, y: 50}}
          animate={{
            opacity: 1, y: 0
          }}
          exit={{opacity: 0, y: 100}}
          className={styles.motion_modal}>
          <div className={styles.motion_modal_body}>
            <p>TEST</p>
            <button onClick={onclick}>close</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}