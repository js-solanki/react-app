import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';
import Loading from '../common/loading';
import NavBar from '../common/navbar';

function AppContent() {

    return (
        <BrowserRouter>
            <NavBar />
            <Loading />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default AppContent;