import {TasksList} from "./TasksList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useState} from "react";

export function MainPage() {
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [boardId, setBoardId] = useState<string | null>(null);
    const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);
    const handleTaskSelected =(id) => setSelectedTaskId(id);
    const handleBoardSelected = (id) => setBoardId(id);
    const handleTaskLoading = (b)=> setIsTaskLoading(b);

    return (
        <div>
            <div style={{display: "flex", gap: "30px"}}>
                <TasksList
                    selectedTaskId={selectedTaskId}
                    handleTaskSelected={handleTaskSelected}
                    handleBoardSelected={handleBoardSelected}
                    handleTaskLoading={handleTaskLoading}/>
                <TaskDetails
                    selectedTaskId={selectedTaskId}
                    boardId={boardId}
                    handleTaskLoading={handleTaskLoading}
                    isTaskLoading={isTaskLoading}/>
            </div>
        </div>
    )
}