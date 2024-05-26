import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesArchive from "./pages/NotesArchive/NotesArchive";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NotesArchive />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
