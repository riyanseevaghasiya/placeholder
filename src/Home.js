import { Link } from "react-router-dom";
import './App.css';

function Home(){
    return(
        <>
        <div className="menu">
        <Link to={"/Posts"} className="btn-theme">Posts</Link>
        <Link to={"/Comments"} className="btn-theme">Comments</Link>
        <Link to={"/Albums"} className="btn-theme">Albums</Link>
        <Link to={"/Photos"} className="btn-theme">Photos</Link>
        <Link to={"/Todos"} className="btn-theme">Todos</Link>
        <Link to={"/Users"} className="btn-theme">Users</Link>
        </div>

        </>
    )

}
export default Home;