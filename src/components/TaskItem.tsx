import type {Task} from "./TaskDetails.tsx";

type TaskItemProps = {
    task: Task;
    isSelected: boolean;
    onTaskSelected: (taskId: string | null) => void;
    onBoardSelected: (boardId: string | null) => void;
    onTaskLoading: (b: boolean) => void;
}

export function TaskItem({task, isSelected, onTaskSelected, onBoardSelected, onTaskLoading}: TaskItemProps) {
    const backgroundColor: Record<number, string> = {
        0: '#ffffff',
        1: '#ffd7b5',
        2: '#ffb38a',
        3: '#ff9248',
        4: '#ff6700',
    }

    const handleTaskClick = () => {
        onTaskSelected?.(task.id);
        onBoardSelected?.(task.attributes.boardId)
        onTaskLoading(true);
    }

    return (
        <li onClick={handleTaskClick}
            style={{
                border: isSelected ? '4px solid blue' : '4px solid black',
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
}

