import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, addForm, toggleForm }) => {
    return (
        <header className="header">
            <h1 >{title}</h1>
            <Button color={toggleForm ? "red" : "green"}
                text={toggleForm ? "Close" : "Add"} onClick={addForm} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

// was used to show propTypes and how it works
Header.PropTypess = {
    title: PropTypes.string.isRequired,
}

/* To use CSS in JS */
// const headingStyles = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header