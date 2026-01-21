import './App.css'
import {useEffect, useState} from "react";
import {ProductList} from "./components/ProductList.tsx";
import {Game} from "./components/Game.tsx";


export function App() {
    const [boardId, setBoardId] = useState(null)
    const products = [
        { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
        { id: 2, name: "Молоко", price: 60, category: "Молочные" },
        { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
    ]


    return (
        <>
            {/*<div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>*/}
            {/*    <button onClick={() => {*/}
            {/*        setSelectedTaskId(null);*/}
            {/*        setSelectedTask(null)*/}
            {/*    }*/}
            {/*    } style={{width: 'fit-content'}}>Сбросить выделение*/}
            {/*    </button>*/}

            {/*</div>*/}

            {/*<div style={{display: 'flex', flexDirection: 'column', gap: '20px', flexWrap: 'wrap'}}>*/}
            {/*    {products.map((p) => <ProductList key={p.id} item={p}/>)}*/}
            {/*</div>*/}

            {/*<Game/>*/}
        </>
    )
}