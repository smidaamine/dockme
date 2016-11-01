export const FETCH_DATA = "FETCH_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
import axios from 'axios';

export function fetchData(){
    return {type :FETCH_DATA , isFetching : true};

}

export function receiveData(data){
    return {type :RECEIVE_DATA , isFetching : false,data : data};

}





export  function getData(){

    return dispatch =>{
        dispatch(fetchData());
        return axios.get('/api/hostmem')
            .then(function(response){
                if(response.status===200){
                    
                    dispatch(receiveData(response.data));
                }
            });
    };

}