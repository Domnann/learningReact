import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BLogDetails = () => {
    const {id}= useParams();
    const  { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/'+ id );

    return ( 
        <div className="blog-details">
            <h2>Blog Details- {id} </h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BLogDetails;