import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import MyMainForm from './form.js';
=======
import MainForm from './form.js';
>>>>>>> 111249678ca32712edc118f267dd7ddbf253d3f0
import List from './list.js';
import axios from 'axios';

function ToDo(){

    const [itemList, setItemList] = useState([])
<<<<<<< HEAD

    useEffect( () => {
        getAll();
    },[]);

    async function getAll(){
        try{
            let results = await axios({
                method: 'get',
                url: 'https://api-js401.herokuapp.com/api/v1/todo'
            });
            setItemList(results.data.results)
        }catch(err){
            console.log(err);
        }
       

    };

=======
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
    
>>>>>>> 111249678ca32712edc118f267dd7ddbf253d3f0
    async function makePost(item){
        try{
        let results = await axios({
            method: 'post',
            url: 'https://api-js401.herokuapp.com/api/v1/todo',
            data: item
        }); 
        console.log('POST RESULTS***********', results)
<<<<<<< HEAD
        getAll();
=======
>>>>>>> 111249678ca32712edc118f267dd7ddbf253d3f0
        }catch (e){
            console.log(e);
        }

    };

<<<<<<< HEAD
    async function makePut(item, id){
      try{
      let results = await axios({
          method: 'put',
          url: `https://api-js401.herokuapp.com/api/v1/todo/${id}`,
          data: item
      }); 
      console.log('Put RESULTS***********', results)
      getAll();
      }catch (e){
          console.log(e);
      }

  };

  async function makeDelete(id){
    try{
    let results = await axios({
        method: 'delete',
        url: `https://api-js401.herokuapp.com/api/v1/todo/${id}`
    }); 
    console.log('dElEtE RESULTS***********', results)
    getAll();
    }catch (e){
        console.log(e);
    }

};
=======
>>>>>>> 111249678ca32712edc118f267dd7ddbf253d3f0


    function updateList(arr){
        setItemList(arr)
    }

    return(
        <>

<<<<<<< HEAD
        <MyMainForm updateList={updateList} makePost={makePost}/>
        <List makeDelete={makeDelete} makePut={makePut} itemList={itemList} setItemList={setItemList}/>
=======
        <MainForm updateList={updateList} makePost={makePost}/>
        <List />
>>>>>>> 111249678ca32712edc118f267dd7ddbf253d3f0
        </>
    )
}

export default ToDo;