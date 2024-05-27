import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesArchive from "./pages/NotesArchive/NotesArchive";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<NotesArchive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
