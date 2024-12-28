import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideoAPI } from '../Services/allAPI'


function View(addVideoResponse) {
  const[allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState('')
  console.log(allVideos)
  useEffect(()=>{
    getAllVideos()

  },[addVideoResponse,deleteVideoResponse])



  const getAllVideos=async()=>{
    try{
    const result=await getVideoAPI()
    if(result.status>=200 && result.status<300){
     setAllVideos(result.data)
    }
  }
  catch(err){
    console.log(err);
  }
  }
  return (
    <>
    <Row>
    {
      allVideos?.length > 0 ?

      allVideos?.map(video=>(
       <Col  key={video?.id} lg={4} sm={6} x={12}>
      <VideoCard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
       </Col>

      ))
      
  :
  <div className='text-danger text-center'>
    Nothing to display
  </div>
      
    }
    </Row>
    </>
  )
}

export default View 