import { useEffect, useState } from 'react';
import { getTask, type TaskDetailsData } from '../dal/api.ts';

export function useTaskDetails(
  selectedTaskId: string | null,
  boardId: string | null,
  handleTaskLoading: (b: boolean) => void
) {
  const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null);

  useEffect(() => {
    if (!selectedTaskId || !boardId) return;

    getTask(boardId, selectedTaskId)
      .then((json) => setTaskDetails(json.data))
      .finally(() => handleTaskLoading(false));
  }, [selectedTaskId, boardId, handleTaskLoading]);

  return { taskDetails };
}
