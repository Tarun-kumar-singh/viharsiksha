import './App.css';
import Matric from "./component/users/matric";
import Footer from './component/comman/footer';
import NavBar from "../src/component/users/navBar";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import Home from "./component/users/home"; 

function App() {

  return (
    <div>  
        <BrowserRouter>
             
          <NavBar
           routeValue={0}
          />
            <div style={{marginTop:'150px'}} >
            <Switch> 
                  <Route exact path='/' component={Home} />   
                  <Route exact path='/matric' component={Matric} />   
             </Switch>
            </div>
         
        </BrowserRouter>  
    </div>
  );
}

export default App;
