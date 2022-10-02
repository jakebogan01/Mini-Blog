import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center max-w-[600px] border-b border-b-[#f2f2f2f] mx-auto p-5">
            <h1 className="text-[#f1356d]">The Mini Blog</h1>
            <div className="ml-auto">
                <Link to="/" className="ml-4 p-1.5 hover:text-[#f1356d]">Home</Link>
                <Link to="/create" className="ml-4 p-1.5 hover:text-[#f1356d]" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }} >New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;