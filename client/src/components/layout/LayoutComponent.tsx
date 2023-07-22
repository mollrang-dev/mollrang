import React, { ReactElement, ReactNode } from "react";
import { Header } from "@components/layout/header/Header";
import styles from "./LayoutComponent.module.scss";
import { MetaComponent } from "@components/layout/header/MetaComponent";
import { Footer } from "./footer/Footer";

interface Props {
  children: ReactNode;
}

export const LayoutComponent: React.FC<Props> = (props): ReactElement => {
  const { children } = props;
  return (
    <>
      <MetaComponent />
      <Header />
      <main className={styles.layout_container}>{children}</main>
      <Footer />
    </>
  );
};
