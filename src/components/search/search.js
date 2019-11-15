import React from 'react';
import './search.css';
import lupa from '../../img/lupa.svg'

function Search(props) {
  return(
    <form>
      <input value={props.value} onChange={props.onChange} className="search" type="text" placeholder="Name ..." />
      <span>
        <img className="input__img" alt="" src={lupa} aria-hidden="true"/>
      </span>
    </form>
  )
}

export default Search;