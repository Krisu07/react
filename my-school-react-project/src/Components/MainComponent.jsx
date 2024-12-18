import React, { useState } from 'react';
import Header from './Header';
import ProductForm from './ProductForm';
import OrderInfo from './OrderInfo';
import logo from '../Pictures/fruits.jpg'; 

const MainComponent = () => {
  //tuotteet//
  const products = [
    { name: 'Toilet Paper', price:  3},
    { name: 'Cookies', price: 2 },
    { name: 'Cat Litter', price: 5 },
    { name: 'Cat Food', price: 4 },
    { name: 'Dog Food 1kg', price: 6 },
    { name: 'Dog Food 12kg', price: 65 },
    { name: 'Loose Candies 1kg', price: 10 },
    { name: 'New Phone', price: 199 },
    { name: 'Flower Bouquet', price: 50 },
  ];
}

export default MainComponent;
