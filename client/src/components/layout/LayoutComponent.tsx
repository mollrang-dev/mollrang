import React, {ReactElement, ReactNode} from "react";
import {Header} from "@components/layout/header/Header";
import styles from "./LayoutComponent.module.scss";
import {MetaComponent} from "@components/layout/header/MetaComponent";
import {Footer} from "./footer/Footer";
import {SideMenu} from "@components/ui/side-menu/SideMenu";
import {useAppSelector} from "@hooks/reduxHooks";
import {LoadingSpinner} from "@components/ui/spinner/LoadingSpinner";

interface Props {
  children: ReactNode;
}

export const LayoutComponent: React.FC<Props> = (props): ReactElement => {
  const {children} = props;
  const {sideBarIsOpen, isLoading} = useAppSelector((state) => state.utils);

  return (
    <>
      <MetaComponent/>
      <Header/>
      <SideMenu isOpen={sideBarIsOpen}/>
      <LoadingSpinner isLoading={isLoading}/>
      <main className={styles.layout_container}>{children}</main>
      <Footer/>
    </>
  );
};
