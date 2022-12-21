import { useEffect, useState } from "react"
import {Message } from './Message'
export const SimpleForm = () => {

const [formState, setFormState] = useState({
  username: 'Mati',
  email: 'mati@mati.com'
});

const {username, email} = formState;


useEffect(() => {
  // console.log("useEffect called");
}, []);
useEffect(() => {
  // console.log("formState changed");
}, [formState]);
useEffect(() => {
  // console.log("email changed");
}, [email]);


const onInputChange = ({target}) => {
  const {name, value } = target;
  setFormState({
    ...formState,
    [name] : value
  });
  // console.log({name, value});
}

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input type="text" className="form-control mb-2 " placeholder="Username" name="username" value={username} onChange={onInputChange} />

        {
          (username === 'Mati') && <Message />
        }
        <input type="email" className="form-control mt-2" placeholder="user@user.com" name="email" value={email} onInput={onInputChange} />
    </>
  )
}
