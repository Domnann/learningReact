import React from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const{data: blogs, isLoading, error }= useFetch('http://localhost:8000/blogs')
    // let name = "Mario"
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(25);
    // const handleClick =()=> {
    //     setName("Luigi");
    //     setAge(30);
    // const [name, setName]= useState('Mario');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>loading...</div> }
            { blogs && <BlogList blogs = {blogs} title = "All Blogs!" /> }
        </div>
     );
}
 
export default Home;