import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductContainer from './components/ProductContainer/ProductContainer';
import Contact from './components/Contact/Contact';
import Error404 from './components/Error404/Index';
import Cart from './components/Cart/Cart';
import HomeCarousel from './components/Carousel/Carousel';
import {Store} from './store';


function App() {

  const [data, setData] = useState({
    items: [],
    qty: 0,
  })

  return (
    <>
      <Store.Provider value={[data, setData]}>    
        <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route exact path='/'>
                <HomeCarousel/>
              </Route>
              <Route path='/products'>
                <ProductContainer/>
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
              <Route path='/Cart'>
                <Cart/>
              </Route>
              <Route path='*'>
                <Error404/>
              </Route>
            </Switch>
          <Footer/>
        </BrowserRouter>
        </Store.Provider>  
    </>
  )
}

export default App;
