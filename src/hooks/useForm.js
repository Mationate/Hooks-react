import { useEffect, useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
    
    // useEffect(() => {
    //     // console.log("useEffect called");
    // }, []);
    // useEffect(() => {
    //     // console.log("formState changed");
    // }, [formState]);
    // (() => {
    //     // console.log("email changed");
    // }, [email]);
    
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
        ...formState,
        [name] : value
        });
        // console.log({name, value});
    }


  const onResetForm = () => {
    setFormState(initialForm);
  }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm}
  
}
