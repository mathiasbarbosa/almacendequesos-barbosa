import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Nabvar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'


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
        <Route path= "/cart">
          <Cart/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
