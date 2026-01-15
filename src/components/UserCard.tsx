export function UserCard(props: { id: number, name: string, age: number, email: string, avatar?: string }) {
    const defaultAvatar = 'https://placehold.co/128?text=no+photo'
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', border: '6px solid black' }}>
            <div style={{height: '150px'}}>
            <img src={ props.avatar || defaultAvatar} alt={'avatar'}></img>
            </div>
            <p>name: {props.name}</p>
            <p>age: {props.age < 18 ? '🔞' : '' } {props.age}</p>
            <p>email: {props.email}</p>
        </div>
    )
}