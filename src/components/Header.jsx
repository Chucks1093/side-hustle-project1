import './styles/header.css';
function Header() {
     return(
          <div className="header">
               <div className='logo'><img src="python.com.png" alt="" /></div>
               <div className='head-info'>
                    <div>Projects</div>
                    <div>Articles</div>
                    <div>Socials</div>
               </div>
          </div>
     )
}
export default Header;