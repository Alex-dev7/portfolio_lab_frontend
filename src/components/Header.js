import { Link } from "react-router-dom"

function Header(props) {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        marginBottom : "2rem",
        width: "90%",
        margin: "auto",
        color: "white",
      }; 

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav  style={navStyle}>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header