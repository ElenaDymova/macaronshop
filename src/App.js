import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);

  useEffect(() => {
    fetch('https://66c4b6a6b026f3cc6cf06c1e.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json)
    });
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj)
  }

  return (
    <div>
      {cartIsOpened && <Drawer items={cartItems} onClickClose={() => setCartIsOpened(false)}/>}
      <Header onClickCart={() => setCartIsOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All desserts</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Search..."/>
          </div>
        </div>
        

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price = {item.price}
              imageUrl = {item.img}
              description = {item.description}
              onClickLike = {() => console.log('добавили в закладки')}
              onPlus = {(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;