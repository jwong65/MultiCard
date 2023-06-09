import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar';
import Playfield from './components/playfield';

// import Test from './pages/pages'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path ='/' element={<Playfield />} />
        {/* <Route path='/test' element={<Test />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
