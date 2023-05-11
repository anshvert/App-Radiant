import { Games,Todo } from './Components'
import { Routes, Route, useNavigate } from 'react-router-dom';

function Apps(props) {
  const {user} = props
    return (
      <>
        <Routes>
          <Route path="/todo" element={<Todo user={user}/>}/>
          <Route path="/games" element={<Games/>}/>
        </Routes>
      </>
    );
}
export default Apps