import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import Home from './Home';
function Users(){
    let [data,setdata] = useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
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
                        <th>Id</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                {data.map((ele,id)=>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Street</th>
                                                <th>Suite</th>
                                                <th>City</th>
                                                <th>Zipcode</th>
                                            </tr>
                                            <tr>
                                                <td>{ele.address.street}</td>
                                                <td>{ele.address.suite}</td>
                                                <td>{ele.address.city}</td>
                                                <td>{ele.address.zipcode}</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </>
    );
}
export default Users;