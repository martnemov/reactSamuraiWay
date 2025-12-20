import './App.css'

export function App() {
    return (
        <>
            <div className="music-player">
                <h4>1. Классы</h4>
                <h1 id="title" className="player-title">
                    Мой музыкальный плеер
                </h1>
                <hr/>

                <h4>2. maxlength</h4>
                <input
                    type="search"
                    id="search"
                    placeholder="Поиск музыки"
                    maxLength={50}
                    value="Начните печатать..."
                    disabled={true}
                />
                <hr/>

                <h4>3. rows, cols, maxLength, readonly</h4>
                <textarea
                    placeholder="Оставьте комментарий к треку..."
                    rows={3}
                    cols={40}
                    maxLength={200}
                    readOnly
                    disabled={true}
                ></textarea>
                <hr/>

                <h4>4. tabindex</h4>
                <button tabIndex={0}>Click</button>
                <hr/>

                <h4>5. colspan, rowspan</h4>
                <table border={1}>
                    <tbody>
                    <tr>
                        <td colSpan={2}>1</td>
                        <td rowSpan={3}>2</td>
                    </tr>
                    </tbody>
                </table>
                <hr/>

                <h4>6. for</h4>
                <input type="radio" id="repeat-off" name="repeat" disabled={true}/>
                <label htmlFor="repeat-off">Без повтора</label>
                <hr/>
            </div>
        </>
    )
}