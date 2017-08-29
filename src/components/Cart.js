import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../App.css';

const Title = styled.p`
  text-align: left;
  margin: 10px;
  font-size: 25px;
`;

const Header = styled.div`
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-around;

  span {
    width: 20%;
    margin: 10px 0;
    font-size: 18px;
  }
`;

const NameProduct = styled.span`
  width: 200px;
`;

const DelButton = styled.div`
  margin: 10px 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const QuantityContainer = styled.span`
  display: flex;
  justify-content: center;
  div {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #b9b9b9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;  
  }
`;

const Total = styled.span`
  display: flex;
  justify-content: flex-end;
  margin: 10px;

  span {
    font-size: 25px;
  }
`;

class Cart extends Component {
  static propTypes = {
    addedProducts: PropTypes.array.isRequired,
    delProduct: PropTypes.func.isRequired,
  };

  delProduct = product => {
    this.props.delProduct(product);
  }

  plusProduct = product => {
    this.props.plusProduct(product)
  }

  minusProduct = product => {
    this.props.minusProduct(product)
  }

  render() {
    const { addedProducts } = this.props;
    return (
      <div>
        <Title>Cart</Title>
        <div>
          <Header>
            <NameProduct>Item</NameProduct>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total price</span>
            <div style={{ width: '20px' }} />
          </Header>
          {addedProducts.map((p) => {
            return (
              <Header key={p.id}>
                <NameProduct>{p.name}</NameProduct>
                <span>{p.price} USD</span>
                <QuantityContainer>
                  <div onClick={this.minusProduct.bind(null, p)}>-</div>
                  {p.quantity}
                  <div onClick={this.plusProduct.bind(null, p)}>+</div>
                </QuantityContainer>
                <span>{p.quantity * p.price} USD</span>
                <DelButton onClick={this.delProduct.bind(null, p)}>-</DelButton>
              </Header>              
            )
          })}
          <Total>
            <span>Total amount: {addedProducts.reduce((summ,p) => (summ + (p.quantity * p.price)), 0)} USD</span>
          </Total>
        </div>
      </div>
    );
  }
}

export default Cart;
