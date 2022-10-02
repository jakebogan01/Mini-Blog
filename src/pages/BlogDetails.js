import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch(' http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        })
            .then(() => {
                navigate('/');
            })
    }

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-xl text-[#f1356d] mb-2.5">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="my-5">{blog.body}</div>
                    <button className="bg-[#f1356d] text-white border-0 p-2 rounded-lg cursor-pointer" onClick={handleClick} type="button">Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;