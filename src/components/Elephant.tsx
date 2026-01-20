import {useEffect, useState} from "react";

export function Elephant(props) {
    const [weight, setWeight] = useState(100);

    const handleClick = () => {
        if (props.reset) {
            props.reset();
        }
    }

    const handleFeedHealthyFood = () => {
        setWeight(weight + 20);
    }

    const handleFeedJunkFood = () => {
        setWeight(weight - 20);
    }

    useEffect(() => {
        if (weight >= 200) {
            props.handleCongrats();
        }
    }, [weight])

    useEffect(() => {
        if (weight <= 20) {
            props.handleOver();
        }
    }, [weight])



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1>Покорми слона</h1>
            <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
            <br />
            <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
            <div style={{fontSize: weight + "px"}}>🐘</div>
        </div>
    )
}