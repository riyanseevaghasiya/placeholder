import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import Home from './Home';
function Todos(){
    let [data,setdata]=useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setdata(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})
    return(
        <>
            <Home></Home>
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>COMPLETED</th>
                    </tr>
                </thead>
                {data.map((ele,id)=>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.completed ? 'True' : 'False'}</td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>

        </>
    );
}
export default Todos;