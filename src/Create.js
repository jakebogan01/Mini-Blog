import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    }

    return (
        <div className="max-w-[400px] mx-auto text-center">
            <h2 className="text-xl text-[#f1356d] mb-[30px]">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="block text-left" htmlFor="">Blog Title:</label>
                <input
                    className="block w-full px-1.5 py-2.5 my-2.5 border border-[#dddddd] box-border"
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="block text-left" htmlFor="">Blog Body:</label>
                <textarea
                    className="block w-full px-1.5 py-2.5 my-2.5 border border-[#dddddd] box-border"
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                />
                <label className="block text-left" htmlFor="">Blog Author:</label>
                <select
                    className="block w-full px-1.5 py-2.5 my-2.5 border border-[#dddddd] box-border"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                <button className="bg-[#f1356d] text-white border-0 p-2 rounded-lg cursor-pointer">Add Blog</button>
            </form>
        </div>
    );
}

export default Create;