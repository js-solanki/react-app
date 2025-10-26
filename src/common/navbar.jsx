import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">COUNTER</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">TODO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">BOOKS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}
export default NavBar;