import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import Cart from '../components/Cart';
import Products from '../data/products';
import ProductCell from '../components/ProductCell';
import { addToCart, delProduct, changeCount } from '../actions';

const Wrapper = styled.div`
  margin: 10px auto;
  width: 900px;
  align-content: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  flex-grow: 3;
  flex-basis: auto;
`;

const Title = styled.p`
  text-align: left;
  margin: 10px;
  font-size: 25px;
`;

class ShopPage extends Component {
  addToCart = product => {
    this.props.addToCart(product, this.props.addedProducts);
    this.forceUpdate();
  }

  delProduct = product => {
    this.props.delProduct(product, this.props.addedProducts);
    this.forceUpdate();
  }

  plusProduct = product => {
    this.props.changeCount(product, this.props.addedProducts, 1);
    this.forceUpdate();
  }

  minusProduct = product => {
    this.props.changeCount(product, this.props.addedProducts, -1);
    this.forceUpdate();
  }

  render() {
    const { addedProducts } = this.props;

    return (
      <Wrapper>
        {addedProducts.length > 0 &&
          <Cart
            addedProducts={addedProducts}
            delProduct={this.delProduct}
            minusProduct={this.minusProduct}
            plusProduct={this.plusProduct}
          />
        }
        <Title>Products</Title>
        <Content>
          {Products.map(product => <ProductCell key={product.id} product={product} addToCart={this.addToCart.bind(null, product)} />)}
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  addedProducts: state.addedProducts,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product, addedProducts) => dispatch(addToCart(product, addedProducts)),
  delProduct: (product, addedProducts) => dispatch(delProduct(product, addedProducts)),
  changeCount: (product, addedProducts, count) => dispatch(changeCount(product, addedProducts, count)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
