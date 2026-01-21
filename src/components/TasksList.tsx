import {useEffect, useState} from "react";
import {TaskItem} from "./TaskItem.tsx";

export function TasksList(props) {
    const [tasks, setTasks] = useState<any[] | null>(null);

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
            <div>
                <ul style={{display: "flex", flexDirection: 'column', gap: '20px', paddingInlineStart: '0'}}>
                    {tasks?.map(task => {
                        return <TaskItem key={task.id}
                                         task={task}
                                         isSelected={props.selectedTaskId === task.id}
                                         onTaskSelected={props.handleTaskSelected}
                                         onBoardSelected={props.handleBoardSelected}/>
                    })}
                </ul>
            </div>

        </>
    )
}