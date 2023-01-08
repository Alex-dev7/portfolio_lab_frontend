import { Link } from "react-router-dom"

function Footer(props) {
    return (
      <footer>
            <div>
                <p>Copyright 2023 </p>
                <p>Built by Alexei Rusu</p>
            </div>
            <div>
            <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>

            </div>
      </footer>
    )
}

export default Footer