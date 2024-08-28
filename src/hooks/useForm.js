import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => setFormState(initialForm)

    return {
        ...formState,
        formState, onInputChange, onResetForm,
    }
}



//La propiedad name del formulario siempre tiene que ser igual al valor a obtener, por ejemplo de email o descripcion o user. Y no importa cuantos input tenga, siempre
//tienen que tener name(cada input) y el value debe ser el valor a obtener, entonces un ejemplo seria:  

/*<input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            /> */