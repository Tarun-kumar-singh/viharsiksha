import './App.css';
import Home from "../src/component/users/home";
import Footer from './component/comman/footer';
import NavBar from "../src/component/users/navBar";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 

function App() {
  return (
    <div>      
        <NavBar/>
        <div style={{marginTop:'150px'}} >
          <BrowserRouter>
          <Switch> 
              <Route exact path='/home' component={Home} />     
          </Switch>
          </BrowserRouter>  
          </div>
          {/* <Footer/> */}
      
    </div>
  );
}

export default App;
