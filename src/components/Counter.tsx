import {useState} from "react";

export function Counter(props) {
    const [value, setValue] = useState(1);

    const handleClick = () => {
        const newValue = value + 1;
        setValue(newValue);

        if (newValue === 5) {
            if (props.onFinish) {
                props.onFinish();
            }
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1>Нажми на кнопку 4 раза, чтобы увидеть слона</h1>
            <button onClick={handleClick}>+ {value}</button>
        </div>
    )
}