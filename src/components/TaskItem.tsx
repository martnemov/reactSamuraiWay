import {useState} from "react";

export function TaskItem(props) {
    const backgroundColor: Record<number, string> = {
        0: '#ffffff',
        1: '#ffd7b5',
        2: '#ffb38a',
        3: '#ff9248',
        4: '#ff6700',
    }

    const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);


    return (
        <li onClick={() => {
            props.onTaskSelected?.(props.task.id);
            props.onBoardSelected?.(props.task.data?.attributes.boardId)
            setIsTaskLoading(true);
        }}
            style={{
                border: props.isSelected ? '4px solid blue' : '4px solid black',
                listStyleType: 'none',
                width: '300px',
                padding: '20px',
                backgroundColor: backgroundColor[props.task.attributes.priority]
            }}
            key={props.task.id}>
            <div>
                <span>Заголовок:</span>
                <span
                    style={{
                        textDecorationLine: props.task.attributes.status === 2 ?
                            'line-through' : 'none'
                    }}>{props.task.attributes.title}</span>
            </div>
            <div>
                <span>Статус:</span>
                <input type="checkbox" defaultChecked={props.task.attributes.status === 2}/>
            </div>
            <div>
                <span>Дата создания задачи:</span>
                <span>{new Date(props.task.attributes.addedAt).toLocaleDateString()}</span>
            </div>
        </li>
    )
}

