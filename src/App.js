import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="max-w-[600px] my-10 mx-auto p-5">
                <Home />
            </div>
        </div>
    );
}

export default App;