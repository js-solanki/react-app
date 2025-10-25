
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './counter';
import ToDo from './toDo';
import { AppContext } from '../AppContext';

function AppContent() {
    const { loading } = useContext(AppContext);

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">COUNTER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">TODO</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {loading &&

                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }

            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<ToDo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppContent;