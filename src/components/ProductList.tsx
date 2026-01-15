export function ProductList (prop) {
    return <div style={{display: 'flex', flexDirection: 'column', border: '4px solid black', padding: '20px', width: '300px', gap: '20px'}}>
        <div>id: {prop.item.id}</div>
        <div>name: {prop.item.name}</div>
        <div>price: {prop.item.price}</div>
        <div>category: {prop.item.category}</div>
        <button>Add to basket</button>
        </div>
}