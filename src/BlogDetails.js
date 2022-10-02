import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch(' http://localhost:8000/blogs/' + id);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-xl text-[#f1356d] mb-2.5">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="my-5">{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;