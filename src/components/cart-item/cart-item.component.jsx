import React from 'react';
import { CartItemContainer, CartItemImage, CartItemName, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item"/>
      <ItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
