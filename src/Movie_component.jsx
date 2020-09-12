import React from "react";

function Movie(props)
{
    return (
        <>
     <div className="card">
    <img className="card-img-top" src={props.link} alt="alternate"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h4 className="rating">IMDB:<strong className="rate">{props.rating}</strong></h4>
    <p className="card-text">{props.desc}</p></div>
    <div className="BTN">
    <a href={props.watch_now} target="blank" class="btn btn-primary">Watch Now</a></div></div>
    </>
    );
}
export default Movie;