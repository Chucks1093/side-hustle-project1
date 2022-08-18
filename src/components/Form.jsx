
import './styles/form.css';

function Form() {
     return (
          <div className='form'>
               <h1>Contact Me</h1>
               <form onSubmit={(e)=> {e.preventDefault()}}>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='email' />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className='submit-btn' type="submit">Send ✉</button>
               </form>
          </div>
     )
}

export default Form;