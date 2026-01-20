export function Congratulations(props) {
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
        <h1>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</h1>
        <button onClick={handleClick}>Давай сыграем еще раз и покормим другого слона</button>
        <div style={{ fontSize: "200px" }}>😊</div>
    </div>
}