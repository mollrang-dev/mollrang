import React, {ComponentProps, ReactElement, useEffect, useRef} from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import classNames from "classnames";

interface Props extends ComponentProps<"div"> {
  isOpen: boolean;
  onRequestClose: () => void;
  layerStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
}

export const CustomModal: React.FC<Props> = (props): ReactElement => {
  const {isOpen, onRequestClose, layerStyle, cardStyle, className} = props;
  const ele = useRef<HTMLDivElement>(null);
  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#Modal") as HTMLDivElement);

  if (!element) return null;

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  const outerClickEvent = (e: React.MouseEvent) => {
    const {target} = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements && onRequestClose) onRequestClose();
    }
  };

  const modalElement = (): ReactElement => {
    return (
      <div
        className={classNames(styles.modal, isOpen ? styles.show : styles.hide)}
        onClick={outerClickEvent}
        style={layerStyle}
      >
        <div
          className={classNames(className, styles.modal_body)}
          ref={ele}
          style={cardStyle}
        >
          {props.children}
        </div>
      </div>
    );
  };

  return <>{isOpen ? ReactDOM.createPortal(modalElement(), element) : null}</>;
};
