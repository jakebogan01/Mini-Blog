const Navbar = () => {
    return (
        <nav className="flex items-center max-w-[600px] border-b border-b-[#f2f2f2f] mx-auto p-5">
            <h1 className="text-[#f1356d]">The Dojo Blog</h1>
            <div className="ml-auto">
                <a href="/" className="ml-4 p-1.5 hover:text-[#f1356d]">Home</a>
                <a href="/create" className="ml-4 p-1.5 hover:text-[#f1356d]" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }} >New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;