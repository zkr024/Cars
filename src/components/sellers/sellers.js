import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { allSellers } from '../../redux/sellers/sellers';

const Sellers = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers);

  useEffect(() => {
    dispatch(allSellers());
  }, [dispatch]);
  return (
    <div>
      <select className="form-control slct" name="seller" value={sellers.id}>
        <option>Select Sellers</option>
        {sellers.map((seller) => <option key={seller.id} value={seller.id}>{seller.name}</option>)}
      </select>
    </div>
  );
};

export default Sellers;
