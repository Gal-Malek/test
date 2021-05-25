import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to ='/'>Home</Link>
        <Link to ='/page2'>page2</Link>
        <Switch>
          <Route exact path ='/' component ={()=>{return<h1>Home Page</h1>}}/>
          <Route exact path ='/page2' component ={()=>{return<h1>Page 2</h1>}}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
