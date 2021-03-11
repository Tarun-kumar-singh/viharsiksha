import './App.css';
import Home from "../src/component/users/home";
import Footer from './component/comman/footer';
import NavBar from "../src/component/users/navBar";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import DisplayObjectiveQuestions from "./component/users/displayObjectiveQuestions";

function App() {
  return (
    <div>        
      <NavBar/>
      <BrowserRouter>
        <Switch>

            <Route exact path='/home' component={Home} /> 
            <Route exact path='/questions' component={DisplayObjectiveQuestions} /> 
            {/* <Redirect to='/notfound' />   */}
                
        </Switch>
      </BrowserRouter>  
 
       {/* <Footer/> */}
    </div>
  );
}

export default App;
