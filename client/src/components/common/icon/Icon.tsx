import {ComponentProps, ReactElement} from "react";
import classNames from "classnames";
import styles from './Icon.module.scss';
import Image from "next/image";

type IconType = 'hamburger' | 'exit' | 'github' | 'pennote' | 'document' | 'star'

interface Props extends ComponentProps<'span'> {
  type: IconType | string;
  width: number;
  height: number;
}

export const Icon = (props: Props): ReactElement => {
  const {type, width, height, className} = props;
  return (
    <span className={classNames(className, styles.iconWrapper)}>
      <Image alt={`${type}-icon`} src={`/images/icons/${type}.svg`} width={width} height={height}/>
    </span>
  )
}