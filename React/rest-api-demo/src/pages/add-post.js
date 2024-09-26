import { useState } from "react";


const AddPost = () => {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                       value={title} 
                       onChange={e => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Body:
                    <input />
                </label>

                <label>
                    User Id:
                    <input />
                </label>

                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;