import { Games,Todo } from './Components'
import { Routes, Route, useNavigate } from 'react-router-dom';

function Apps() {
    return (
      <>
        <Routes>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/games" element={<Games/>}/>
        </Routes>
      </>
    );
}
export default Apps