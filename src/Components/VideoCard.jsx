import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI } from '../Services/allAPI';

function VideoCard({ videoDetails, setDeleteVideoResponse }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteVideo = async (videoId) => {
    try {
      const result = await deleteVideoAPI(videoId);
      setDeleteVideoResponse(result.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Card className="mb-5">
          <Card.Img onClick={handleShow} style={{ height: '170px', cursor: 'pointer' }} variant="top" src={videoDetails?.imageUrl}/>
          <Card.Body>
            <Card.Title className="d-flex flex-column align-items-center justify-content-center">
              <h5 style={{ fontSize: '20px' }} className="ms-2">
                {videoDetails?.captions}
              </h5>
              <p className="text-muted mb-1" style={{ fontSize: '16px' }}>
                Author: {videoDetails?.AuthorName || 'Unknown'}
              </p>
              <p className="text-success mb-3" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                Price: ${videoDetails?.price || 'N/A'}
              </p>
              <button onClick={() => deleteVideo(videoDetails?.id)} className="btn"> <i className="fa-solid fa-trash"style={{ color: 'red', fontSize: '16px' }} ></i>
              </button>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.captions}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="770" height="377" src={`${videoDetails?.youtubeUrl}?autoplay=1`} title="Aavesham - Jukebox | Jithu Madhavan | Fahadh Faasil |Sushin Shyam | Nazriya Nazim | Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
