import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
   
    return (
        <header className='header'>
            <h1>User Registration List</h1>
            <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close Form' : 'Add New'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps ={
    title: 'Registration'
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header
