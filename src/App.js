import { AppProvider } from "./context";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./components/Favorites/Favorites";
import BookDetails from "./components/BookDetails/BookDetails";



function App() {


  return (
    <>
    <AppProvider>

    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route path = "/" element = {<BookList />}/>
        <Route path = "/book" element = {<BookList />}/>
        <Route path = "/books/:id" element = {<BookDetails />} />
        <Route path = "/favorites" element = {<Favorites />} />
        
  
        </Routes>
    </BrowserRouter>
    </AppProvider>

    </>
  );
}

export default App;
