import {useState} from "react";
import { Elephant } from "./Elephant";
import {Counter} from "./Counter.tsx";
import {Congratulations} from "./Congratulations.tsx";
import {GameOver} from "./GameOver.tsx";

export function Game () {
    const [activePage, setActivePage] = useState("counter");

    const handleFinish = () => setActivePage("elephant");
    const handleFinish2 = () => setActivePage("counter");
    const handleFinish3 = () => setActivePage("congratulations");
    const handleFinish4 = () => setActivePage("gameOver");

    return <>
        <div>
            {activePage === "counter" && (
                <Counter onFinish={handleFinish}/>
            )}
            {activePage === "elephant" && <Elephant handleCongrats={handleFinish3} handleOver={handleFinish4}/>}
            {activePage === "congratulations" && <Congratulations reset={handleFinish2}/>}
            {activePage === "gameOver" && <GameOver reset={handleFinish2}/>}
        </div>
    </>
}