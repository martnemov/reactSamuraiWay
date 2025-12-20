import './App.css'

const tasks =
    [
        {
            id: 1,
            title: "Купить продукты на неделю",
            isDone: false,
            addedAt: "1 сентября",
            priority: 2,
        },
        {
            id: 2,
            title: "Полить цветы",
            isDone: true,
            addedAt: "2 сентября",
            priority: 0,
        },
        {
            id: 3,
            title: "Сходить на тренировку",
            isDone: true,
            addedAt: "3 сентября",
            priority: 1,
        },
    ]

const backgroundColor: Record<number, string>  = {
    0: '#ffffff',
    1: '#ffd7b5',
    2: '#ffb38a',
    3: '#ff9248',
    4: '#ff6700',
}

export function App() {
    if (!tasks) {
        return <h1>Загрузка...</h1>
    }

    if (!tasks.length) {
        return <h1>Задачи отстутствуют</h1>
    }

    return (
        <>
            <div>
                <ul style={{display: "flex", flexDirection: 'column', gap: '20px'}}>
                    {tasks.map(task =>
                        <li style={{border: '4px solid black', listStyleType: 'none', width: '300px', padding: '20px',
                        backgroundColor: backgroundColor[task.priority]}}
                            key={task.id}>
                            <div>
                                <span>Заголовок:</span>
                                <span
                                    style={{textDecorationLine: task.isDone ? 'line-through' : 'none'}}>{task.title}</span>
                            </div>
                            <div>
                                <span>Статус:</span>
                                <input type="checkbox" defaultChecked={task.isDone}/>
                            </div>
                            <div>
                                <span>Дата создания задачи:</span>
                                <span>{task.addedAt}</span>
                            </div>
                        </li>)}
                </ul>
            </div>
        </>
    )
}