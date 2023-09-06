import React, {ReactElement, ReactNode, useState} from "react";
import {Header} from "@components/layout/header/Header";
import styles from "./LayoutComponent.module.scss";
import {MetaComponent} from "@components/layout/header/MetaComponent";
import {Footer} from "./Footer";
import {SideMenu} from "@components/ui/side-menu/SideMenu";
import {useAppSelector} from "@hooks/reduxHooks";
import {LoadingSpinner} from "@components/ui/spinner/LoadingSpinner";
import {BottomNavigation} from "@components/layout/navigation/BottomNavigation";
import {BottomModal} from "@components/common/modal/motion/BottomModal";

interface Props {
  children: ReactNode;
}

export const LayoutComponent: React.FC<Props> = (props): ReactElement => {
  const {children} = props;
  const {sideBarIsOpen, isLoading} = useAppSelector((state) => state.utils);
  const [test, setTest] = useState(false);

  const onClick = () => {
    setTest(true);
  }
  const close = (payload: boolean) => {
    setTest(payload)
  }
  return (
    <>
      <MetaComponent/>
      <Header/>
      <SideMenu isOpen={sideBarIsOpen}/>
      <LoadingSpinner isLoading={isLoading}/>
      <main className={styles.layout_container}>{children}</main>
      <button onClick={onClick}>TEST</button>
      <BottomModal isOpen={test} onRequestClose={close}/>
      <Footer/>
      <BottomNavigation/>
    </>
  );
};
