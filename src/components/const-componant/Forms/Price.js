import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Filter, FilterPrice } from '../../../redux/types/filterType';

export const Price = ({ label, name }) => {
  // let products = useSelector(e=>e.filter.products)
  // let productsAll = useSelector(e=>e.getDate.products)
  // let dispatch = useDispatch()
  // let input=(e)=>e.target.value===0?dispatch({type:Filter,products:productsAll,name:name}):dispatch({type: FilterPrice,products:products,value:e.target.value,name:label,names:productsAll});

  return (
    <div className="switch-form mb-3">
      <h5 className="">{label}:</h5>
      <input
        type="text"
        defaultValue={0}
        className="ps-2 fs-5 w-50"
        onInput={(e) => e}
      />
    </div>
  );
};
