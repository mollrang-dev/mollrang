import { ReactElement } from "react"
import {Timer} from "@components/utils/timer/Timer";

export const Root = (): ReactElement => {
  return (
    <div>
      <p>루트</p>
      <Timer time={60} />
    </div>
  )
}
