import {ReactElement, ReactNode} from "react";
import {Typography} from "@components/common/typography/Typography";

interface Props {
  children: ReactNode
}

export const FormUi = (props: Props): ReactElement => {
  const {children} = props;
  return (
    <form>
      {children}
    </form>
  )
}