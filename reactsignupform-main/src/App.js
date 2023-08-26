import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import Land from './components/land';
import { BrowserRouter,Link,Navigate, } from 'react-router-dom'


function App() {
  return (
  <>
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/land' element={<Land/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />

    </Routes>
  </>
  );
}

export default App;
