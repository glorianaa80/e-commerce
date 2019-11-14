import React from 'react';
import './search.css';

function Search(props) {
  return(
    <form>
      <input value={props.value} onChange={props.onChange} className="search" type="text" placeholder="Search ..." />
    </form>
  )
}

export default Search;