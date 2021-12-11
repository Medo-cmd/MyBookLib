import './App.css';
import Mybooks from './MyBooks';
import {Switch,Route} from 'react-router-dom';
import Admin from './Admin';
import NavBar from './Layout/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
       <Route exact path='/' component={Mybooks}/>
       <Route path='/Admin' component={Admin}/>
      </Switch>
  </div>
  );
}

export default App;
