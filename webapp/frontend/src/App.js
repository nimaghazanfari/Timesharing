import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/homepage';
import Sample from './components/sample';
import Bidding from './components/bidding';
import BaseNav from "./components/nav"

function App() {
  return (
    <>
    <BaseNav />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  exact path='/sample' component={Sample}/>
        <Route  exact path='/bidding' component={Bidding}/>
        {/* <Route  exact path='/2' component={Page2}/>
        <Route  exact path='/3' component={Page3}/> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}


export default App;
