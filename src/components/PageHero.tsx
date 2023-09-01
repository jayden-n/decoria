import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IPageHeroProps {
  title: string;
  product?: string | boolean;
}

const PageHero = ({ title, product }: IPageHeroProps) => {
  return (
    <Wrapper>
      <div className='section-center'>
        {/* Navigate back to home & display the current page*/}
        <h3>
          <Link to='/'>~ Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
