import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Users from './Users';
function App() {
  
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path = '/' element={<Users/>}> </Route>
        <Route path = '/create' element={<CreateUser/>}> </Route>
        <Route path = '/update/:id' element={<UpdateUser/>}> </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
