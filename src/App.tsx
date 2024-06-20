import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import NotesArchive from "./pages/NotesArchive/NotesArchive";
import SingleNote from "./pages/SingleNote/SingleNote";
import Trash from "./pages/Trash/Trash";
import Favourite from "./pages/Favourites/Favourites";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotesArchive />} />
          <Route path="/edit/:id" element={<SingleNote />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
