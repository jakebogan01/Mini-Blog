import { useState, useEffect } from 'react';
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((e) => {

            })
    }, [])

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;