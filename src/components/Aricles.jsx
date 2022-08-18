import './styles/works.css';
import Project from './Project';

const articles = [
     {title :"Box-Model", cover: "box-Header.png"},
     {title :"Console Api", cover: "console.jpg"} ];

function Articles(props) {
     
     return (
          <div className='projects'>
               <div className='description'>
                    <div><h3>{props.section}</h3></div>
                    <hr />
               </div>
               <div className='article-container'>
                    {articles.map((project,i )=> (<Project project={project.title} isArticle={true} image={project.cover} />))}
               </div>
          </div>
     )
}
export default Articles;