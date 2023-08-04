import React, {ReactElement, useEffect, useRef, useState} from "react";
import styles from './SideMenu.module.scss';
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import {setSideBarIsOpen} from "@store/slice/utilSlice";
import {Button} from "@components/common/button/Button";
import {Icon} from "@components/common/icon/Icon";
import {GithubButton} from "@components/utils/oauth/github/GithubButton";
import {NotePenIcon} from "@components/common/icon/custom/NotePenIcon";
import {DocumentIcon} from "@components/common/icon/custom/DocumentIcon";
import {StartIcon} from "@components/common/icon/custom/StartIcon";

interface Props {
  isOpen: boolean;
}

export const SideMenu = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {isLogin} = useAppSelector((state) => state.auth);
  const {isOpen = false} = props;
  const ele = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) {
      isOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = '')
    }
  }, [isOpen])

  const closeSideMenuButtonHandler = () => {
    dispatch(setSideBarIsOpen(false));
  }

  const outerClickEvent = (e: React.MouseEvent) => {
    const {target} = e
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node) // HTMLElement
      if (!elements) closeSideMenuButtonHandler();
    }
  }

  return (
    <aside onClick={outerClickEvent} className={classNames(styles.side_menu, !isOpen && styles.hide)}>
      <div ref={ele} className={styles.side_menu_container}>
        <div className={styles.close_button_wrapper}>
          <Button aria-label={'사이드 메뉴 닫기'} variant={'icon'} onClick={closeSideMenuButtonHandler}>
            <Icon type={'exit'} width={30} height={30}/>
          </Button>
        </div>
        <div className={styles.side_menu_top}>
          {isLogin ? (
            <div>
              로그인 성공 예시
            </div>
          ) : (
            <div className={styles.github_button_wrapper}>
              <GithubButton/>
            </div>
          )}
        </div>

        <hr/>
        {isLogin && (
          <div className={styles.side_menu_body}>
            <ul className={styles.menu_items_container}>
              <li>
                <StartIcon width={28} height={28}/>
              </li>
              <li>
                <DocumentIcon width={28} height={28}/>
              </li>
              <li>
                <NotePenIcon width={28} height={28}/>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}