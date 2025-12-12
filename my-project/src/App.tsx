import './App.css'

export function App() {
    const tasks = [
        {
            id: 1,
            title: "Купить продукты на неделю",
            isDone: false,
            addedAt: "1 сентября",
        },
        {
            id: 2,
            title: "Полить цветы",
            isDone: true,
            addedAt: "2 сентября",
        },
        {
            id: 3,
            title: "Сходить на тренировку",
            isDone: false,
            addedAt: "3 сентября",
        },
    ]
    return (
        <div>
            <h1>Список дел</h1>
            <ul>
                {tasks.map(tasks => {
                    return (
                        <li key={tasks.id}>
                            <div>
                                <span>Заголовок: 
                                </span>
                                <span>{tasks.title}
                                </span>
                            </div>

                            <div>
                                <span>Статус: 
                                </span>
                                <input type="checkbox" defaultChecked={tasks.isDone}/>
                            </div>
                            
                            <div>             <span>Дата создания задачи: 
                                </span>
                            <span>{tasks.addedAt}</span>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}


export default App
