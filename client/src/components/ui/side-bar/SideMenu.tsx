import {ReactElement} from "react";
import styles from './SideMenu.module.scss';
import classNames from "classnames";
import {useAppDispatch} from "@hooks/reduxHooks";
import {setSideBarIsOpen} from "@store/slice/utilSlice";
import {Button} from "@components/common/button/Button";
import {Icon} from "@components/common/icon/Icon";
import {GithubButton} from "@components/utils/oauth/github/GithubButton";

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
      <div className={styles.side_menu_container}>
        <div className={styles.close_button_wrapper}>
          <Button variant={'icon'} onClick={closeSideMenuButtonHandler}>
            <Icon type={'exit'} width={30} height={30}/>
          </Button>
        </div>
        <div className={styles.side_menu_top}>
          <div className={styles.github_button_wrapper}>
            <GithubButton/>
          </div>
        </div>

        <hr/>

        <div className={styles.side_menu_body}>
          <ul className={styles.menu_items_container}>
            <li>
              <Icon type={'star'} width={28} height={28}/>
            </li>
            <li>
              <Icon type={'document'} width={28} height={28}/>
            </li>
            <li>
              <Icon type={'pennote'} width={28} height={28}/>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}