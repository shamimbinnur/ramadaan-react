import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './user/pages/Home'
import Profile from './user/pages/Profile'
import MyAppBar from './user/components/MyAppBar';
import { useState } from "react";


const App = ()=> {

  const [isLogedin, setIsLogedin] = useState(false)

  return (
    <>
    <MyAppBar isLogedin={isLogedin} />
    <Router>
      <Switch>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
