import React, {ReactElement} from "react";
import Image from "next/image";

export const MollrangInto = (): ReactElement => {
  return (
    <>
      <div>
        <Image
          priority={true}
          src={"/images/banner.svg"}
          alt={"banner"}
          width={216}
          height={190}
        />
      </div>
    </>
  )
}