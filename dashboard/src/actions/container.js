export const FETCH_CONTAINERS = "FETCH_CONTAINERS";
export const RECEIVE_CONTAINERS = "RECEIVE_CONTAINERS";
import axios from 'axios';

export function fetchContainers(){
    return {type :FETCH_CONTAINERS , isFetching : true};

}

export function receiveContainers(containers){
    return {type :RECEIVE_CONTAINERS , isFetching : false,containers : containers};

}





export  function getContainers(){

    return dispatch =>{
        dispatch(fetchContainers());
        return axios.get('/api/containers')
            .then(function(response){
                if(response.status===200){
                    
                    dispatch(receiveContainers(response.data));
                }
            });
    };

}