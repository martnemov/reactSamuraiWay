import { TasksList } from './TasksList.tsx';
import { TaskDetails } from './TaskDetails.tsx';
import { useTaskSelection } from '../bll/useTaskSelection.ts';

export function MainPage() {
  const {
    selectedTaskId,
    boardId,
    isTaskLoading,
    handleTaskSelected,
    handleBoardSelected,
    handleTaskLoading,
  } = useTaskSelection();

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
