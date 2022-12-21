import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();
    const onClick = () => {
        inputRef.current.select();
        // console.log(inputRef);
        // document.querySelector('input').select();
    }
  return (
    <>
        <h1>Focus screen</h1>
        <hr />
        <input ref={inputRef} type="text" className="form-control" placeholder="Ingrese nombre" />
        <button onClick={onClick} className="btn btn-primary mt-2">Set focus</button>
    </>
  )
}
