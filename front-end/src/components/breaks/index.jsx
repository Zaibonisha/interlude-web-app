import React from 'react'
import Cards from './Cards';
import Filters from './Filters';

const index = () => {
  return (
    <div>
      <div className="my-10">
        <Filters />
      </div>
      <Cards />
    </div>
  )
};

export default index;
