import { useState } from "react";

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("");

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue("");
        setError("");
    }

    const handleBlur = (event:React.FocusEvent<HTMLInputElement>) => {
        if(!event.target.value) {
            setError("Заполните обязательное поле");
        } else {
            setError("");
        }
    }

    return {
        value,
        onChange: handleChange,
        onBlur: handleBlur,
        reset,
        error
    };
};

export default useInput;