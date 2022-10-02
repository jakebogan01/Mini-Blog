import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="max-w-[600px] my-10 mx-auto p-5">
                    <Routes>
                        <Route path="/" element={<Home />} ></Route>
                        <Route path="/create" element={<Create />} ></Route>
                        <Route path="/blogs/:id" element={<BlogDetails />} ></Route>
                        <Route path="*" element={<NotFound />} ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;