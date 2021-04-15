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
import Login from "./user/pages/Login";
import SignUp from './user/pages/SignUp'



const App = ()=> {

  const [isLogedin, setIsLogedin] = useState(false)
  const [username, setUsername] = useState('Abdur Rouf')

  return (
    <>
    <Router>
    <MyAppBar isLogedin={isLogedin} username={username} />
      <Switch>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/'>
          <Home isLogedin={ isLogedin} />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
