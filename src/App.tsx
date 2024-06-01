import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import NotesArchive from "./pages/NotesArchive/NotesArchive";
import CreateNote from "./pages/CreateNote/CreateNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotesArchive />} />
          <Route path="/create" element={<CreateNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
