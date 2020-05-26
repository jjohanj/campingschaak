import React, {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./masonry.css"
import Iframe from './iframe'

function Masonry(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [frame, setFrame] = useState("");

  const [players, setPlayers] = useState("");

  var Articles = props.data.map(data => {
    if (data.id % 2 !== 0) {
    return (
      <div key={data.id} className="grid-item">
      <article>
      <div onClick={(event) => { handleShow(); setFrame(data.link); setPlayers(data.players);}}>
        <div>
        <picture>
        <source srcSet={data.img.replace("jpg", "webp")} type="image/webp" />
        <img className="img-responsive" src={data.img.replace("jpg", "JPG")} alt=""/>
        </picture>
      </div>
        <div className="date">{data.date}</div>
        <h4>{data.players}</h4>
        <p>{data.opening} - {data.result}</p>
        <hr /></div>
      </article>
      </div>
    );}
    else {
      return (
        <div key={data.id} className="grid-item">
        <article  className="no-img bg-light"><div onClick={(event) => { handleShow(); setFrame(data.link); setPlayers(data.players);}}>
          <div>
          <h4 className="pb-2">{data.players}</h4>
          <p>{data.opening}  - {data.result}</p>
          <div className="date">{data.date}</div>
          </div>
            <div>
            <picture>
            <source srcSet={data.img.replace("jpg", "webp")} type="image/webp" />
            <img className="img-responsive" src={data.img} alt=""/>
            </picture>
            </div>
          </div>
        </article>
        </div>


      )
    }
  });

  return (
  <>

  {Articles}


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

export default Masonry
