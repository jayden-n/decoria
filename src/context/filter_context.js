import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  filtered_products: [],
  // default
  all_products: [],

  // product views
  grid_view: true,
  sort: 'price-lowest',
};

const FilterContext = React.createContext();

// ensure that the state related to product filtering is updated whenever the "products" context changes.
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // sorting select
  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    dispatch({ type: UPDATE_SORT, payload: value });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
