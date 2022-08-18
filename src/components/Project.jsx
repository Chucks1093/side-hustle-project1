import './styles/project.css'

function Project(props) {
     return(
          <div style={{
               backgroundImage: `url(${props.image})`
          }} className='project'>
               <div className='cover-project'></div>
               <p className='project-name'>{props.project}</p>
               <button type='button' className='project-button'>{props.isArticle ==true ? "View Article" : " View Project"}</button>
          </div>
     )
}
export default Project;