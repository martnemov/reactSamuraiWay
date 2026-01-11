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
    const [tasks, setTasks] = useState<any[] | null>(null);
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [selectedTask, setSelectedTask] = useState<number | null>(null);
    const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);

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
            <button onClick={() => {
                setSelectedTaskId(null);
                setSelectedTask(null)
            }
            } style={{width: 'fit-content'}}>Сбросить выделение
            </button>
            <div style={{display: 'flex', flexDirection: 'row', padding: '20px', gap: '20px'}}>
                <div>
                    <ul style={{display: "flex", flexDirection: 'column', gap: '20px', paddingInlineStart: '0'}}>
                        {tasks?.map(task => {
                            return (
                                <li onClick={() => {
                                    setSelectedTaskId(task.id);
                                    setSelectedTask(null);
                                    setIsTaskLoading(true);

                                    fetch(
                                        "https://trelly.it-incubator.app/api/1.0/boards/" + task.attributes.boardId + "/tasks/" + task.id,
                                        {
                                            headers: {
                                                "api-key": "4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07"
                                            },
                                        },)
                                        .then(response => response.json())
                                        .then(json => {
                                            setSelectedTask(json.data);
                                            setIsTaskLoading(false)
                                        })
                                        .catch(() => setIsTaskLoading(false))
                                }}
                                    style={{
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
                                            style={{
                                                textDecorationLine: task.attributes.status === 2 ?
                                                    'line-through' : 'none'
                                            }}>{task.attributes.title}</span>
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
                <div style={{width: '300px', border: '4px solid black', margin: '15px 0', padding: '0 20px'}}>
                    <h3>Детали задачи</h3>
                    <div>{isTaskLoading ?
                        'Загрузка...' :
                        <div>{selectedTask ?
                            <div>
                                <div>
                                    <span>Заголовок таски: </span>
                                    <span>{selectedTask?.attributes.title}</span>
                                </div>
                                <div>
                                    <span>Заголовок доски: </span>
                                    <span>{selectedTask?.attributes.boardTitle}</span>
                                </div>
                                <div>
                                    <span>Описание таски: </span>
                                    <span>{selectedTask?.attributes.description ?? 'Нет описания'}</span>
                                </div>
                            </div> : 'Задача не выбрана'
                        }</div>
                    }</div>
                </div>
            </div>
        </>
    )
}