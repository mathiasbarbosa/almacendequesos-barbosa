import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Nabvar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <div className="home">
      <BrowserRouter>
      <Nabvar/>
      <Switch>
        <Route exact path="/" component={ ItemListContainer } />
        <Route path="/itemdetailcontainer/:productId">
          <ItemDetailContainer/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
