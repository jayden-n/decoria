import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Product from './Product';

interface IProduct {
  id: number;
  price: number;
  name: string;
  image: string;
  description: string;
}
interface IGridViewProps {
  products: IProduct[];
  children: ReactNode; // Allow any type of React children
}
const GridView = ({ products, children }: IGridViewProps) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product: IProduct) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
