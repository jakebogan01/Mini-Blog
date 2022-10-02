const BlogList = ({blogs, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="py-2.5 px-4 my-5 border-b border-b-[#fafafa] hover:shadow" key={blog.id} >
                    <h2 className="text-xl text-[#f1356d] mb-2">{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;