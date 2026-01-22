import {useEffect, useState} from "react";

const TaskField = ({ label, value }) => (
    <div className="flex gap-2">
        <span className="font-medium text-gray-400">{label}:</span>
        <span>{value}</span>
    </div>
);

const TaskContent = ({ task }) => {
    const { title, boardTitle, description } = task.attributes;

    return (
        <div className="space-y-2">
            <TaskField label="Заголовок таски" value={title} />
            <TaskField label="Заголовок доски" value={boardTitle} />
            <TaskField label="Описание" value={description ?? 'Нет описания'} />
        </div>
    );
};

export function TaskDetails({selectedTaskId, boardId, handleTaskLoading, isTaskLoading}) {
    const [selectedTask, setSelectedTask] = useState<number | null>(null);

    useEffect(() => {
        if (!selectedTaskId || !boardId) return;

        const url = `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`;

        fetch(url, {
            headers: { "api-key": "4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07" }
        })
            .then(res => res.json())
            .then(json => setSelectedTask(json.data))
            .finally(() => handleTaskLoading(false));
    }, [selectedTaskId, boardId]);

    const renderContent = () => {
        if (isTaskLoading) return <p className="text-gray-400">Загрузка...</p>;
        if (!selectedTask) return <p className="text-gray-400">Задача не выбрана</p>;
        return <TaskContent task={selectedTask} />;
    };

    return (
        <aside className="w-80 border-4 border-gray-700 rounded-lg my-4 p-5">
            <h3 className="text-xl font-bold mb-4">Детали задачи</h3>
            {renderContent()}
        </aside>
    );
}