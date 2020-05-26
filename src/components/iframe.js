import React from "react"
import LazyLoad from 'react-lazy-load'

const Iframe = (props) => {
var link =  "https://lichess.org/embed/#0?theme=auto&bg=auto"
link = link.slice(0, 26) + props.link + link.slice(26);

  return (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe title="chess game" src={link}></iframe>
  </div>
)
}


export default Iframe
