import {ReactElement} from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import {Button} from "@components/common/button/Button";
import {Icon} from "@components/common/icon/Icon";
import {setSideBarIsOpen} from "@store/slice/utilSlice";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";

export const Header = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {sideBarIsOpen} = useAppSelector((state) => state.utils);

  const sideBarButtonHandler = () => {
    dispatch(setSideBarIsOpen(!sideBarIsOpen))
  }
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Image
          src={"/images/logo.svg"}
          alt="mollang-logo"
          width={90}
          height={60}
        />
        <Button
          onClick={sideBarButtonHandler}
          variant={'icon'}
        >
          <Icon type={'hamburger'} width={30} height={31}/>
        </Button>
      </div>
    </header>
  );
};
