import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20%;
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
`;

const ImgStyle = styled(Img)`
  width: 100%;
`;

const Button = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  cursor: pointer;

  p {
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    margin: 0px;
  };
`;

const ProductName = styled.span`
  font-size: 24px;
  margin: 10px 0px;
`;

const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0px;
`;

class ProductCell extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  addToCart = () => this.props.addToCart();

  render() {
    const { product } = this.props;
    return (
      <Wrapper>
        <ImgStyle src={product.img} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} USD</ProductPrice>
        </div>
        <Button onClick={this.addToCart}><p>Add to cart</p></Button>
      </Wrapper>
    );
  }
}

export default ProductCell;
