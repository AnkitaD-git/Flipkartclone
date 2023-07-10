import './App.css';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { Topbar, Menubar, HomeSlider, Product, CartItem } from './components/components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>

      <Router>
        <Topbar />
        <Menubar />
        <HomeSlider />
        <Switch >
          <Route path="/" exact component={ Product } />
          <Route path="/product/:productId" exact component={SingleProduct} />
          <Route path="/cart" exact component={CartItem}/>
          <Route> 404 Not Found! </Route>
        </Switch >
      </Router>

    </>
  );
}

export default App;
