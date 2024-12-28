import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';

function Add({ setAddVideoRsponse }) {
  const [videoDetails, setVideoDetails] = useState({ captions: '', AuthorName: '', price: '', imageUrl: '', youtubeUrl: ''});
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedUrl=(url)=>{

    if(url.includes('v=')){
     
      const videoId=url.split('v=') [1].slice(0,11)
      console.log(videoId);



      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
      setIsInvalidUrl(false)

    }
    else{
      {
      setIsInvalidUrl(true)
      setVideoDetails({...videoDetails,youtubeUrl:""})
      }
    }
  }

  const uploadData = async () => {
    const { captions, AuthorName, price, imageUrl, youtubeUrl } = videoDetails;

    if (captions && AuthorName && price && imageUrl && youtubeUrl) {
      try {
        const result = await addVideoAPI(videoDetails);
        if (result.status >= 200 && result.status < 300) {
          setAddVideoRsponse(result.data);
          setBooks((prevBooks) => [...prevBooks, videoDetails]);
          handleClose();
          toast.success(`${result.data.captions} added to your collection`);
        }
      } catch (err) {
        console.error(err);
        toast.error('Failed to upload video. Please try again.');
      }
    } else {
      toast.warning('Please enter all fields completely');
    }
  };

  return (
    <>
      <div>
        <h6 style={{fontSize:'40px'}} className="text-success fw-bold">
          Upload Books
          <button className="btn btn-success ms-3 rounded-circle fw-bold fs-5" onClick={handleShow}>
            +
          </button>
        </h6>
      </div>

      {/* Modal for Adding Book Details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Book Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border border-info p-3">
            <FloatingLabel controlId="caption" label="Caption" className="mb-3">
              <Form.Control
                onChange={(e) => setVideoDetails({ ...videoDetails, captions: e.target.value })}
                type="text"
                placeholder="Caption"
              />
            </FloatingLabel>

            <FloatingLabel controlId="author" label="Author Name" className="mb-3">
              <Form.Control
                onChange={(e) => setVideoDetails({ ...videoDetails, AuthorName: e.target.value })}
                type="text"
                placeholder="Author Name"
              />
            </FloatingLabel>

            <FloatingLabel controlId="price" label="Price" className="mb-3">
              <Form.Control
                onChange={(e) => setVideoDetails({ ...videoDetails, price: e.target.value })}
                type="number"
                placeholder="Price"
              />
            </FloatingLabel>

            <FloatingLabel controlId="image" label="Image URL" className="mb-3">
              <Form.Control
                onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })}
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>

            <FloatingLabel controlId="url" label="YouTube URL" className="mb-3">
              <Form.Control
                onChange={(e) => getEmbedUrl(e.target.value)}
                type="text"
                placeholder="YouTube URL"
              />
            </FloatingLabel>
            {isInvalidUrl && <div className="text-danger mt-3">Invalid URL</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-info" onClick={uploadData}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default Add;
