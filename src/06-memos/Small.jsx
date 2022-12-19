import { memo } from "react";

export const Small = memo(({value}) => {
    console.log("me dibujé");
    return (
    <small>{value} </small>

    )
})
