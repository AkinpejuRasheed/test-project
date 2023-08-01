import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './component/Header';
import Thumb from './component/thumb';
import Grid from './component/grid';
import Banner from './component/banner';
import SearchBar from './component/searchbar';
import Home from './component/pages/home';



function App() {
  return ( 
    <>

   < Header />

    <Home/>



   <GlobalStyle/>

    </>
    
   
  );

}



export default App;


