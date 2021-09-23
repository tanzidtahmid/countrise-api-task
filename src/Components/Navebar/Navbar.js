import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('')
  const history = useHistory()
  const onBlur = (e) => {
    setSearch(e.target.value)
  }
  console.log(search)
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/country/${search}`)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link to='/' className="nav-link active" aria-current="page" >Countries</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" onSubmit={handleSubmit} >
            <input className="form-control me-2" type="search" placeholder="Search" onBlur={onBlur} aria-label="Search" />
            <input type="submit" value="Submit" />
          </form>
        </div>
     
    </nav>
  );
};

export default Navbar;