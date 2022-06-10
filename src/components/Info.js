import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Info() {
  let {userObj,isSuccess,isError,isLoading,errMsg}=useSelector(state=>state.user);
  const [users,setUsers]=useState([])
  useEffect(()=>{
    console.log(userObj);
    axios.get(`http://localhost:4000/detailapi/getdetails/${userObj.name}`)
    .then(response=>{
      console.log(response)
      console.log(response.data.payload)
      // for(let user in response.data.payload){
      //   users.push({user:response.data.payload[user]})
      // }
      if(response.data.payload!==undefined){
        let data=[...users]
        data.push(response.data.payload)
        setUsers(data)
      }
      console.log(users)
    })
    .catch(err=>console.log("Error occurred in accessing details"))}
  ,[userObj])

  return (
    <div>
      {/* users.map((user)=>{

      }) */}
      Hii
    </div>
  )
}

export default Info