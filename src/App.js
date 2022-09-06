import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import './App.css';
import Navigate from './Nav/Nav.js';
import NewsList from "./NewsList/NewsList";
import Footer from "./Footer/Footer";
function App() {


 

  return (
    <>
    <BrowserRouter>
    <Navigate/>
    <Routes>
    <Route path='/' element={<NewsList category='TopNews'/>}/>
      <Route path='/home' element={<NewsList category='TopNews'/>}/>
      <Route path='/Business' element={<NewsList category='Business'/>}/>
      <Route path='/Technology' element={<NewsList category='Technology'/>}/>
      <Route path='/Science' element={<NewsList category='Science'/>}/>
      <Route path='/Entertainment' element={<NewsList category='Entertainment'/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    

    </>
  );
}

export default App;
