import Navbar from './components/Navbar/Navbar';
import MainLogo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import ProductContainer from './components/ProductContainer/ProductContainer';

function App() {




  const textProduct = [
    {
      id:1,
      title: 'producto',
    },
    {
      id:2,
      title: 'producto 2',
    },
    {
      id:3,
      title: 'producto 3',
    },
    
  ]



  const getProduct = new Promise((resolve, reject) => {
  

      resolve(textProduct);
   
  })
  
  getProduct
    .then( console.log(textProduct))
    .catch(error => console.log(error));

  return (
    <>
    <Navbar/>
    <MainLogo/>
    <ProductContainer/>
    <Footer/>
    </>
  )
}

export default App;
