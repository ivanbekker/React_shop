export const addToCart = (product, addedProducts) => {
  if (product.quantity > 0) {
    product.quantity += 1;
    addedProducts.splice(addedProducts.findIndex(p => p.id === product.id), 1, product);
  } else {
    product.quantity = 1;
	  addedProducts.push(product);
  }
	return {
    type: 'ADD_PRODUCT',
    payload: addedProducts,
  }
}

export const delProduct = (product, addedProducts) => {
  product.quantity = 0;
  addedProducts.splice(addedProducts.findIndex(p => p.id === product.id), 1);
  return {
    type: 'ADD_PRODUCT',
    payload: addedProducts,
  }
}

export const changeCount = (product, addedProducts, count) => {
  product.quantity += count;
  product.quantity > 0
  ? addedProducts.splice(addedProducts.findIndex(p => p.id === product.id), 1, product)
  : addedProducts.splice(addedProducts.findIndex(p => p.id === product.id), 1);
  return {
    type: 'ADD_PRODUCT',
    payload: addedProducts,
  } 
}
