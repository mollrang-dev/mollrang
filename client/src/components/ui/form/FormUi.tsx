import {ReactElement, ReactNode} from "react";

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