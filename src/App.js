import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import Comments from './Comments'
import Albums from './Albums';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';
import { Routes, Route } from "react-router-dom"
import Home from './Home';


function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/Posts" element={ <Posts/> }></Route>
        <Route path="/Comments" element={ <Comments/> }></Route>
        <Route path="/Albums" element={ <Albums/> }></Route>
        <Route path="/Photos" element={ <Photos/> }></Route>
        <Route path="/Todos" element={ <Todos/> }></Route>
        <Route path="/Users" element={ <Users/> }></Route>
      </Routes>
      
    </>
  );
}

export default App;
