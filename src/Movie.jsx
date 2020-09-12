import React from 'react';


function Movie(props)
{
    return <div className="card">
  <img className="card-img-top" src={props.link} alt="alternate"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="lld.html" class="btn btn-primary">Watch Now</a></div></div>;

}

export default Movie;