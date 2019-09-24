import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import Cart from '../Cart';

import {
  addProduct,
  removeProduct
} from '../../flux/actions';

class App extends React.Component {
  deleteProduct (productId) {
    
  }

  addProduct (product) {
    
  }

  render () {
    console.log(this.props);
    const { product = {} } = this.props;
    const { products = [] } = product;

    return (
      <div className="App">
        <Cart
          products={products}
          onDeleteProduct={this.deleteProduct.bind(this)}
          onAddProduct={this.addProduct.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product
});

const mapActionsToProps = {
  addProduct,
  removeProduct
};

export default connect(mapStateToProps, mapActionsToProps)(App);
