
import { Routes, Route } from 'react-router-dom';
import Counter from './component/COUNTER/counter';
import ToDo from './component/TODO/toDo';
import Books from './component/BOOKS/books';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default AppRoutes;