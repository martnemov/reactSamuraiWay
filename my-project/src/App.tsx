import './App.css'

function App() {
    const tasks = [
        {id: 0, title: "Купить продукты на неделю", isDone: false},
        {id: 1, title: "Полить цветы", isDone: true},
        {id: 2, title: "Сходить на тренировку", isDone: false},
    ]

    return (
        <div>
            <h1>Список дел</h1>
            <ul>
                {tasks.map(tasks => {
                    return (
                        <li key={tasks.id}>
                                <div>{tasks.title}</div>
                                <input type="checkbox" defaultChecked={tasks.isDone}/>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default App
