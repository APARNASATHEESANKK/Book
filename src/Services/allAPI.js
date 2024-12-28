import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


// api call for add video details

export const addVideoAPI=async(video)=>{

 return await  commonAPI("POST",`${server_url}/allVideos`,video)

    

}
//api call for get videos
export const getVideoAPI=async()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"")
}

// api call for delete videocard

export const deleteVideoAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})
}
