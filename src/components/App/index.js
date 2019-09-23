import React from 'react';
import './index.css';
import Cart from '../Cart';

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Produto',
        price: 10.0
      }
    ]
  }

  deleteProduct (productId) {
    this.setState({
      products: this.state.products.filter((product) => product.id !== productId)
    });
  }

  render () {
    const { products = [] } = this.state;
    return (
      <div className="App">
        <Cart
          products={products}
          onDeleteProduct={this.deleteProduct.bind(this)}
        />
      </div>
    );
  }
}

export default App;
