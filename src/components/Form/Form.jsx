import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './Form.scss'

const Form = () => {
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("Error")
    const [data, setData] = useState({
        name: "",
        author: "",
        img:""
    });


    useEffect(() => {
        validateForm();
      }, [data]);

      const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value,
          });
      
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById("togglerModal").click();
        console.log(data);
        
    }
    const validateForm = () => {
        if (!data.name) {
          setMessage("");
          setBtnDisabled(true)
        } else if (data.name.length < 3) {
          setMessage("Name must be at least 3 characters");
          setBtnDisabled(true);
        }else if (!data.author) {
            setMessage("");
            setBtnDisabled(true);
        }else if(data.author.length < 3){
            setMessage("Author name must be at least 3 characters")
            setBtnDisabled(true)
        }else if(!data.img){
            setMessage("")
            setBtnDisabled(true)
        }else{
            setMessage("")
            setBtnDisabled(false)
        }
      };

  return (
    <>
    <div className="container">
    <form id="contactus">
        <h3>Add Book</h3>
        <fieldset> <input placeholder="book name" type="text" tabIndex="1" required autoFocus name='name' onChange={handleInputChange}/> </fieldset>
        <fieldset> <input placeholder="author name" type="text" tabIndex="2" required name='author' onChange={handleInputChange}/> </fieldset>
        <fieldset> <label htmlFor="img">Book image</label><br /> <input type="file" tabIndex="3" required name='img' onChange={handleInputChange}/> </fieldset>
        <p className='error'>{message}</p>
        <fieldset> <button name="submit" id="submit" disabled={btnDisabled} data-submit="...Sending" onClick={handleSubmit}><i id="icon" className=""></i> Confirm book</button> </fieldset>
        
    </form>

    <button  id="togglerModal"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content container">
                          <div className="container">
                              <div class="card container p-2">
                                  <img src="./src/img/example.webp" class="card-img-top" alt="..." />
                                  <div class="card-body">
                                      <h5 class="card-title">{data.name}</h5>
                                      <p class="card-text">{data.author}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    </div>
    </>
  )
}

export default Form