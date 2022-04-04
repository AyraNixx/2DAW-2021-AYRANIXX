import React from 'react';
import ReactDOM from 'react-dom';
import {FilterableProductTable} from '../src/App';

const PRODUCTS = [
    {category: 'Zapatillas', price: '$60', stocked: true, name: 'vans red'},
    {category: 'Zapatillas', price: '$45', stocked: false, name: 'fila blue'},
    {category: 'Camisetas', price: '$10', stocked: true, name: 'H&M'},
    {category: 'Camisetas', price: '$9', stocked: false, name: 'Zara'},
    {category: 'Camisetas', price: '$7', stocked: true, name: 'Primark'}
  ];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);