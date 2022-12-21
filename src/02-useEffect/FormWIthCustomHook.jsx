import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import {Message } from './Message'
export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: 'Mati',
    email: '',
    password: ''
  });
  // const {username, email, password} = formState;  
  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />

        <input type="text" className="form-control mb-2 " placeholder="Username" name="username" value={username} onChange={onInputChange} />

        {
          (username === 'Mati') && <Message />
        }
        <input type="email" className="form-control mt-2" placeholder="user@user.com" name="email" value={email} onInput={onInputChange} />
        <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onInput={onInputChange} />
        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
