import './App.css';
import Home from "../src/component/users/home";
import Footer from './component/comman/footer';
import NavBar from "../src/component/users/navBar";

function App() {
  return (
    <div>        
      <NavBar/>
      <Home/>
      <Footer/>
     </div>
  );
}

export default App;
