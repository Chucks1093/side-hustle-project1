import './styles/about.css';
function About() {
     return(
          <div className='about'>
               <div className='description'>
                    <hr />
                    <div><h3>About Me</h3></div>
                    <hr />
               </div>
               <div className='about-container'>
                    <div className='image'>
                         <img src="chiboy.jpg" alt="" />
                    </div>
                    <p className='about-info'>My name is Anioke Sebastian ,and am student of the university of Nigeria currently studying Biochemistry. As a software developer , I make use of technologies such as HTML , CSS and Javascript to make software products with good user experience.</p>
               </div>
          </div>
     )
}

export default About;
