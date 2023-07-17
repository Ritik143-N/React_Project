// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import About from './components/about';

function App() {
  return (
        <>
      
    <Navbar title="RitikBlogs" />
    <div className='container my-3'>
    {/* <Textform heading="Enter A Blog Here" /> */}
    <About/>
    </div>
        </>
      );
    }

export default App;
