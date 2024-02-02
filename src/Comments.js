import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Home from './Home';

function Comments(){
    let[data,setdata]=useState([]);
   
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setdata(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

})
    return(
        <>
            <Home></Home>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>POSTID</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                {data.map((ele,id) =>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <td>{ele.postId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td> 
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>   
        </>
    );
}
export default Comments;