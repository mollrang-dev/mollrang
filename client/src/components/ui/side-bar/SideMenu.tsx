import {ReactElement} from "react";
import styles from './SideMenu.module.scss';
import classNames from "classnames";
import {useAppDispatch} from "@hooks/reduxHooks";
import {setSideBarIsOpen} from "@store/slice/utilSlice";

interface Props {
  isOpen: boolean;
}

export const SideMenu = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {isOpen = false} = props;

  const closeSideMenuButtonHandler = () => {
    dispatch(setSideBarIsOpen(false));
  }
  return (
    <aside className={classNames(styles.side_menu, !isOpen && styles.hide)}>
      <div className={styles.side_menu_body}>
        <div>
          <button type={'button'} onClick={closeSideMenuButtonHandler}>
            CLOSE
          </button>
        </div>
      </div>
    </aside>
  )
}