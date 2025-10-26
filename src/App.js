import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppProvider } from './AppContext';
import AppContent from './component/appContent';

function App() {
  return (
    <div>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </div>
  );
}

export default App;
