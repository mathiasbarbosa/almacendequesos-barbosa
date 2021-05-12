import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Nabvar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'
import {Category} from "./components/Category/category"

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
        <Route path= "/category/:categoryId">
          <Category/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
