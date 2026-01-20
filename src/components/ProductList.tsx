import {ProductItem} from "./ProductItem.tsx";

export function ProductList (props) {
    return <ProductItem key={props.id} item={props.item}/>
}