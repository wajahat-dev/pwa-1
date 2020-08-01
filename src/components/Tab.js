
import {Table} from 'react-bootstrap'

import React,{useEffect,useState} from 'react';


function Tab(){

  const [items, setItems] = useState([]);


      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              console.log("check it out Result",result);
              setItems(result)
            }
          )
      }, []);

  return (
    <div className="container">
      <Table striped bordered hover>
  <thead>
    <tr>      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
    {
      items.map((item)=>(
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>

                </tr>
      ))
    }
    
  </tbody>
</Table>
    </div>
  )
}

export default Tab;