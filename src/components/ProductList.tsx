import {ProductItem} from "./ProductItem.tsx";

export function ProductList (props) {
    console.log('📋 ProductList')


    return <ProductItem key={props.id} item={props.item}/>
}