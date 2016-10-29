export const FETCH_IMAGES = "FETCH_IMAGES";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
import axios from 'axios';

export function fetchImages(){
    return {type :FETCH_IMAGES , isFetching : true};

}

export function receiveImages(images){
    return {type :RECEIVE_IMAGES , isFetching : false,images : images};

}





export  function getImages(){

    return dispatch =>{
        dispatch(fetchImages());
        return axios.get('/api/images')
            .then(function(response){
                if(response.status===200){
                    
                    dispatch(receiveImages(response.data));
                }
            });
    };

}