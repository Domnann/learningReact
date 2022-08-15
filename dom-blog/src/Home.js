import { useState, useEffect } from "react";
import BlogList from "./Bloglist";


const Home = () => {
    // let name = "Mario"
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(25);

    // const handleClick =()=> {
    //     setName("Luigi");
    //     setAge(30);
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    // const [name, setName]= useState('Mario');


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            if(!res.ok){
                throw Error("Problem fetching data!");
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
          }) 
          .catch(err=> {
            setIsLoading(false);
            setError(err.message);
            
          })   },[])
    return ( 
        <div className="home">
            {error && <div>{ error }</div> }
            {isLoading && <div>loading...</div> }
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
     );
}
 
export default Home;