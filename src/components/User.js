
const User = ( {user, onDelete}) => {
    return (
        <div className='user'>
            <h3>{user.name} 
            <button style={ {backgroundColor:'red',color:'white', cursor:'pointer'}} 
            onClick={() => onDelete(user.id)}>X</button> 
            </h3>
            <h3>{user.email}</h3>
            <h3>{user.contact}</h3>
        </div>
    )
}

export default User
