import "../css/PageNF.css"
import { useNavigate } from 'react-router-dom';

function PageNF(){
  const navigate = useNavigate()
  return (
    <div className="PageNF">
      <nav className="shelf">
        <a href="/" className="book home-page">Home page</a>
        <a href='/about' className="book about-us">About us</a>
        <a href='/apps' className="book contact">Apps</a>
        <a onClick={()=>navigate(-1)} className="book faq">Back</a>
        <span className="book not-found"></span>
        <span className="door left"></span>
        <span className="door right"></span>
      </nav>
      <h1>Error 404</h1>
      <p>The page you're loking for can't be found</p>
    </div>
  )
}
export default PageNF