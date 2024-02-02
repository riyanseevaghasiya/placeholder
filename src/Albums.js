import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import Home from './Home';

function Albums() {
    let [data,setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
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
                    </tr>
                </thead>
                {data.map((ele,id) =>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </>
    );
}
export default Albums;