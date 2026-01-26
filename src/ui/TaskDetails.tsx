import { useEffect, useState } from 'react';
import { getTask, type TaskDetailsData } from '../dal/api.ts';

type TaskDetailsProps = {
  selectedTaskId: string | null;
  boardId: string | null;
  handleTaskLoading: (b: boolean) => void;
  isTaskLoading: boolean;
};

type TaskFieldProps = {
  label: string;
  value: string;
};

type TaskContentProps = {
  task: TaskDetailsData;
};

const TaskField = ({ label, value }: TaskFieldProps) => (
  <div className="flex gap-2">
    <span className="font-medium text-gray-400">{label}:</span>
    <span>{value}</span>
  </div>
);

const TaskContent = ({ task }: TaskContentProps) => {
  const { title, boardTitle, description } = task.attributes;

  return (
    <div className="space-y-2">
      <TaskField label="Заголовок таски" value={title} />
      <TaskField label="Заголовок доски" value={boardTitle} />
      <TaskField label="Описание" value={description ?? 'Нет описания'} />
    </div>
  );
};

export function TaskDetails({
  selectedTaskId,
  boardId,
  handleTaskLoading,
  isTaskLoading,
}: TaskDetailsProps) {
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null);

  useEffect(() => {
    if (!selectedTaskId || !boardId) return;

    getTask(boardId, selectedTaskId)
      .then((json) => setSelectedTask(json.data))
      .finally(() => handleTaskLoading(false));
  }, [selectedTaskId, boardId, handleTaskLoading]);

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
