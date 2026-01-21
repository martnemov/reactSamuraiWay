import {useEffect, useState} from "react";

export function TaskDetails(props) {
    const isTaskLoading = false;

    const [selectedTask, setSelectedTask] = useState<number | null>(null);



    useEffect(() => {
        fetch(
            "https://trelly.it-incubator.app/api/1.0/boards/" + props.boardId + "/tasks/" + props.selectedTaskId,
            {
                headers: {
                    "api-key": "4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07"
                },
            },)
            .then(response => response.json())
            .then(json => {
                setSelectedTask(json.data);
                // setIsTaskLoading(false)
            })
            // .catch(() => setIsTaskLoading(false))
    }, [props.selectedTaskId])

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
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