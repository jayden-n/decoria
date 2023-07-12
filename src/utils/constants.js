import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

// checkout page only displayed when user is logged in
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'At Decoria, our mission is to provide exquisite and timeless furniture pieces that elevate your spaces, inspiring comfort and style.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision at Decoria is to be the leading online destination for furniture shopping, offering a seamless experience and curated designs for every home.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Established in 2002, Decoria has grown from a humble furniture store to a trusted online platform, serving customers with exceptional quality and personalized home furnishing solutions.',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
