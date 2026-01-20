export function GameOver(props) {
    const handleClick = () => {
        if (props.reset) {
            props.reset();
        }
    }
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center'
    }}>
        <h1>Но не расстраивайся. Давай сыграем еще раз", которая вернет ребенка на первоначальную страницу счетчика</h1>
        <button onClick={handleClick}>Давай сыграем еще раз</button>
        <div style={{fontSize: '200px'}}>🥲</div>
    </div>
}