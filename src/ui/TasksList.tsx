import { useEffect, useState } from 'react';
import { TaskItem } from './TaskItem.tsx';
import { getTasks, type GlobalTaskListItemJsonApiData } from '../dal/api.ts';

type TasksListProps = {
  selectedTaskId: string | null;
  handleTaskSelected: (taskId: string | null) => void;
  handleBoardSelected: (boardId: string | null) => void;
  handleTaskLoading: (b: boolean) => void;
};

export function TasksList({
  selectedTaskId,
  handleTaskSelected,
  handleBoardSelected,
  handleTaskLoading,
}: TasksListProps) {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null);
  const handleReset = () => handleTaskSelected(null);

  useEffect(() => {
    getTasks().then((json) => setTasks(json.data));
  }, []);

  if (!tasks) {
    return <h1>Загрузка...</h1>;
  }

  if (!tasks.length) {
    return <h1>Задачи отстутствуют</h1>;
  }

  return (
    <div>
      <button onClick={handleReset}>Сброс</button>
      <ul
        style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingInlineStart: '0' }}
      >
        {tasks?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              isSelected={selectedTaskId === task.id}
              onTaskSelected={handleTaskSelected}
              onBoardSelected={handleBoardSelected}
              onTaskLoading={handleTaskLoading}
            />
          );
        })}
      </ul>
    </div>
  );
}
