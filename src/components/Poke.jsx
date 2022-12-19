import { useLayoutEffect, useRef, useState } from "react"

export const Poke = ({sprite, name, id}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0, height:0})
  useLayoutEffect(() => {
    //tener tamaño del elemento referenciado, en este caso el p
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({width, height})
    // setBoxSize(pRef.current.width, pRef.current.height)
  }, [name])

  return (
  <>
    <blockquote className="blockquote"
      style={{display:'flex'}}>
          <img src={sprite}  alt="" />
          <p ref={pRef} className="mb-1">Soy un {name} </p>
          <footer className="blockquote-footer">N° pokedex {id} </footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)} </code>
  </>
  )
}
