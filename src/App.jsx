import React from 'react';
import Heading from './Heading';
import data from './Data.js';
import Movie from './Movie_component.jsx';


function list(obj,index)
{
  return <Movie name={obj.title} link={obj.link} rating={obj.rating} text={obj.desc} watch_now={obj.watch_now} key={index}/>
}
function App()
{
  return (<>
 <Heading/>
 <div id="root">
 {data.map(list)}
 </div>
  </>);
}



export default App;
