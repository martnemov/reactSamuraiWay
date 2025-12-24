import './App.css'
import {useEffect, useState} from "react";

const backgroundColor: Record<number, string> = {
    0: '#ffffff',
    1: '#ffd7b5',
    2: '#ffb38a',
    3: '#ff9248',
    4: '#ff6700',
}


export function App() {
    const [tasks, setTasks] = useState<any[] | null >(null);
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
            headers: {
                "api-key": "4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07"
            }
        })
            .then(response => response.json())
            .then(json => setTasks(json.data))
    }, [])

    if (!tasks) {
        return <h1>Загрузка...</h1>
    }

    if (!tasks.length) {
        return <h1>Задачи отстутствуют</h1>
    }
    

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
                <button onClick={() => setSelectedTaskId(null)} style={{width: 'fit-content'}}>Сбросить выделение</button>
                <ul style={{display: "flex", flexDirection: 'column', gap: '20px', paddingInlineStart: '0'}}>
                    {tasks?.map(task => {
                        return (
                        <li onClick={() => setSelectedTaskId(task.id)} style={{
                            border: selectedTaskId === task.id ? '4px solid blue' : '4px solid black',
                            listStyleType: 'none',
                            width: '300px',
                            padding: '20px',
                            backgroundColor: backgroundColor[task.attributes.priority]
                        }}
                            key={task.id}>
                            <div>
                                <span>Заголовок:</span>
                                <span
                                    style={{textDecorationLine: task.attributes.status === 2 ? 'line-through' : 'none'}}>{task.attributes.title}</span>
                            </div>
                            <div>
                                <span>Статус:</span>
                                <input type="checkbox" defaultChecked={task.attributes.status === 2}/>
                            </div>
                            <div>
                                <span>Дата создания задачи:</span>
                                <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}