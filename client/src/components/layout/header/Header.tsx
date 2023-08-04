import {ReactElement} from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import {Button} from "@components/common/button/Button";
import {Icon} from "@components/common/icon/Icon";
import {setSideBarIsOpen} from "@store/slice/utilSlice";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import Link from "next/link";

export const Header = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {sideBarIsOpen} = useAppSelector((state) => state.utils);

  const sideBarButtonHandler = () => {
    dispatch(setSideBarIsOpen(!sideBarIsOpen));
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href={"/"} aria-label={'첫페이지로 이동'}>
          <Image
            src={"/images/logo.svg"}
            alt="mollang-logo"
            width={90}
            height={60}
          />
        </Link>

        <Button onClick={sideBarButtonHandler} variant={"icon"} aria-label={'사이드 메뉴'}>
          <Icon aria-hidden="true" type={"hamburger"} width={30} height={31}/>
        </Button>
      </div>
    </header>
  );
};
