import Navbar from './components/navbar/navbar';
import CartWidget from './components/cartWidget/cartWidget';
import Logo from './components/logo/logo';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
    <CartWidget/>
    <Navbar/>
    <Logo/>
    <Footer/>
    </div>
  );
};

export default App;
