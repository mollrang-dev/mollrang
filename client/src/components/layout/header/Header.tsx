import { ReactElement } from "react";
import styles from "./Header.module.scss";
import LOGO from "@images/logo.svg";
import Image from "next/image";

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Image
          src={"/images/logo.svg"}
          alt="mollang-logo"
          width={90}
          height={60}
        />
        <ul className={styles.header_menu}>
          <li>item1</li>
          <li>item2</li>
        </ul>
      </div>
    </header>
  );
};
