import { TasksList } from './TasksList.tsx';
import { TaskDetails } from './TaskDetails.tsx';
import { useCallback, useState } from 'react';

export function MainPage() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);
  const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);

  const handleTaskSelected = (id: string | null) => setSelectedTaskId(id);
  const handleBoardSelected = (id: string | null) => setBoardId(id);
  const handleTaskLoading = useCallback((b: boolean) => setIsTaskLoading(b), []);

  return (
    <div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <TasksList
          selectedTaskId={selectedTaskId}
          handleTaskSelected={handleTaskSelected}
          handleBoardSelected={handleBoardSelected}
          handleTaskLoading={handleTaskLoading}
        />
        <TaskDetails
          selectedTaskId={selectedTaskId}
          boardId={boardId}
          handleTaskLoading={handleTaskLoading}
          isTaskLoading={isTaskLoading}
        />
      </div>
    </div>
  );
}
