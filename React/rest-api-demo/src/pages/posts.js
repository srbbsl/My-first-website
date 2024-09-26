import { useEffect, useState } from "react";
import PostItem from "./PostItem";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data) => {
            setPosts(data);
        });
    });

    return (
        <div>
            <h1>
                Today's Post    
            </h1>
                        
            <div>
                {
                    posts.map((post, index) => {
                        return (
                            <
                            PostItem
                            post={post}
                            key={index}
                            /> 
                        )
                    })
                }
            </div>
        </div>
    );

};
export default Posts;