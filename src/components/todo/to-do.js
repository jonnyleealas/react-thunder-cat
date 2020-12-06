import React, {useState, useEffect} from 'react';
import MainForm from './form.js';
import List from './list.js';
import axios from 'axios';

function ToDo(){

    const [itemList, setItemList] = useState([])
    useEffect( () =>{
       getAll() 
    },[])
    async function getAll(){
   try{
       let results = await axios({

           method: 'get',
           url: 'https://api-js401.herokuapp.com/api/v1/todo'
       });
   } catch(err){
       console.log(err)
   }
    };



    function updateList(arr){
        setItemList(arr)
    }

    return(
        <>

        <MainForm updateList={updateList} />
        <List />
        </>
    )
}

export default ToDo;