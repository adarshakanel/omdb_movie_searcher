import { Routes, Route } from 'react-router-dom'
import { NavbarComponent } from './Components/NavbarComponent';
import { ErrorPage } from './Pages/ErrorPage';
import { HomePage } from './Pages/HomePage';
import { MoviePage } from './Pages/MoviePage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        {/* Home page */}
        <Route exact path='/' element={<HomePage />}></Route>
        {/* Page with movie details */}
        <Route exact path='/:movieName' element={<MoviePage />}></Route>
        {/* redirect user to default page if they try to route to other pages */}
        <Route path="*" element={<ErrorPage />} /></Routes>
    </div>
  );
}

export default App;
