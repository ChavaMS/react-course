import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Salvador',
        email: 'chava@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {

    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
       //  console.log('email changed');
    }, [email]);

    // Si el segundo argumento esta vacio, solo se ejecuta una vez, al crear el componente.
    /* useEffect(() => {
        
    }, []); */

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="salvador@gmail.com" name="email" value={email} onChange={onInputChange} />
            {
                (username === 'Salvador') && <Message />
            }
        </>
    )
}

