import React, {useState, useEffect} from "react"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./masonry.css"
import StackGrid from "react-stack-grid"
import Iframe from './iframe'

import LazyLoad from 'react-lazy-load';

function Masonry1(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [frame, setFrame] = useState("");

  const [players, setPlayers] = useState("");

  const [width, setWidth] = useState("");

  const handleWidth = () => {
    const windowSize = window.innerWidth;
    if  (windowSize <= 523 ) {
      setWidth("100%")
    }
    else if(windowSize >= 524 && windowSize <= 767 ) {
      setWidth("50%")
      }
    else if (windowSize >= 768 && windowSize <= 990) {
      setWidth("100%")
    }
    else if (windowSize >= 991 ) {
      setWidth("50%")
    }
    };


  useEffect(() => {
    // Your code here
    window.addEventListener("resize", handleWidth);
    handleWidth();
  }, []);




  var Articles = props.data.map(data => {
    if (data.id % 2 === 0) {
    return (
      <article  key={data.id}>
      <div onClick={(event) => { handleShow(); setFrame(data.link); setPlayers(data.players);}}>
        <div>
        <LazyLoad>
        <picture>
        <source srcSet={data.img.replace("jpg", "webp")} type="image/webp" />
        <img className="img-responsive" src={data.img} alt=""/>
        </picture>
        </LazyLoad>
      </div>
        <div className="date">{data.date}</div>
        <h4>{data.players}</h4>
        <p>{data.opening} - {data.result}</p>
        <hr /></div>
      </article>
    );}
    else {
      return (
        <article  key={data.id} className="no-img bg-light"><div onClick={(event) => { handleShow(); setFrame(data.link); setPlayers(data.players);}}>
          <div>
          <h4 className="pb-2">{data.players}</h4>
          <p>{data.opening}  - {data.result}</p>
          <div className="date">{data.date}</div>
          </div>
            <div>
            <LazyLoad>
            <picture>
            <source srcSet={data.img.replace("jpg", "webp")} type="image/webp" />
            <img className="img-responsive" src={data.img} alt=""/>
            </picture>
            </LazyLoad>
            </div>
          </div>
        </article>

      )
    }
  });

  return (
  <>
  <StackGrid
    columnWidth={width}
    monitorImagesLoaded={true}
    gutterHeight={10}
    gutterWidth={0}
  >
  {Articles}


  </StackGrid>
  <Modal  size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered show={show}
          onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{players}</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Iframe link={frame} /></Modal.Body>
  </Modal>
</>

);
}

export default Masonry1
