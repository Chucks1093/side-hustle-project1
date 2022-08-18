
import './styles/works.css';
import Project from './Project';

const projects = [
     {skill:"Custom-Countdown", imageUrl: "time.jpg"},
     {skill: "Music Player", imageUrl: "music.jpg"},
     {skill:"Joke Teller", imageUrl: "robot.jpg"}
]


function Works(props) {
     return (
          <div className='projects'>
               <div className='description'>
                    <div><h3>{props.section}</h3></div>
                    <hr />
               </div>
               <div className='container'>
                    {projects.map((project)=> (<Project key={project.skill} project={project.skill} image={project.imageUrl} />))}
               </div>
          </div>
     )
}
export default Works;