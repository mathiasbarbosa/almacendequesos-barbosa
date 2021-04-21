import './App.css';
import { Nabvar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {
  const itemListContainer  = [
    {
      title:'Lorem ipsum dolor sit amet',
      image:'./images/cremoso.jpg',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
      price:'$000',
    }
  ]

  return (
    <div className="App">
      <Nabvar/>
      {itemListContainer.map(itemList => (
      <ItemListContainer
      title={itemList.title}
      image={itemList.image}
      description={itemList.description}
      price={itemList.price}
      />))}
    </div>
  );
}

export default App;
