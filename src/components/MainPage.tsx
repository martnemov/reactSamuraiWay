import {TasksList} from "./TasksList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useState} from "react";

export function MainPage() {
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [boardId, setBoardId] = useState<string | null>(null);

    return (
        <div>
            <div style={{display: "flex", gap: "30px"}}>
                <TasksList
                    selectedTaskId={selectedTaskId}
                    handleTaskSelected={(id) => setSelectedTaskId(id)}
                    handleBoardSelected={(id) => setBoardId(id)}/>
                <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}/>
            </div>
        </div>
    )
}