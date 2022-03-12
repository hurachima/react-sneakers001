import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://620bf759ab956ad805680033.mockapi.io/Items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);

  return (
    <div className='wrapper clear'>
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40'>
        <div className='d-flex justify-between align-center mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='search' />
            <input type='search' placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.map(obj => (
            <Card
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavourite={() => alert('Нажали на сердечко')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
