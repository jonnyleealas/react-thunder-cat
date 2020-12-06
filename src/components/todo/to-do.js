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
       setItemList(results.data.results)
        } catch(err){
            console.log(err)
        }
    };
    
    async function makePost(item){
        try{
        let results = await axios({
            method: 'post',
            url: 'https://api-js401.herokuapp.com/api/v1/todo',
            data: item
        }); 
        console.log('POST RESULTS***********', results)
        }catch (e){
            console.log(e);
        }

    };



    function updateList(arr){
        setItemList(arr)
    }

    return(
        <>

        <MainForm updateList={updateList} makePost={makePost}/>
        <List />
        </>
    )
}

export default ToDo;