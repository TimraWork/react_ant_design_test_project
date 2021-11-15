import { useState } from "react";

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const resetValue = () => {
        setValue("");
    }

    return {
        value,
        onChange: handleChange,
        resetValue
    };
};

export default useInput;