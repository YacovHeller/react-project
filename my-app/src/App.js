import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Info from './components/info';
import SpanningTable from './components/infoTable';
import Login from './components/login';
import Menu from './components/menu';
import Posts from './components/posts';
import Todos from './components/todos';

function App() {
  const [user, setUser] = useState()


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login updateUser={(user) => setUser(user)} />} />
          <Route path='/home' element={<Menu />}>
            <Route path='/home/todos' element={<Todos id={user} />} />
            <Route path='/home/info' element={<SpanningTable />} />
            <Route path='/home/posts' element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
