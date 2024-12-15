import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import './ListNews.scss'

const ListNews = () => {

    const [libros,setLibros] = useState([]);
    
    async function obtenerlibros() {
        try {
            const response = await axios.get(
                'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7hTPMMLr7vUkT4UXqpmeulKPfzBxArSz'
            );
            
            setLibros(response.data.results.books);

        } catch (error) {
            console.error(error)
        }
    }
    function pintaLibros(){
        
        
        
    }

    useEffect(() => {
        obtenerlibros();
        
      }, []);
    
    
  return (
    <>

<section className="our-webcoderskull padding-lg">
  <div className="container">
    <ul className="row">
        {/*  */}
        {
            libros.map((book)=>{
                console.log(book);
                return(
                    <>
                    <li className="col-12 col-md-6 col-lg-3">
              <div className="cnt-block equal-hight altura">
                <img src={book.book_image} className="img-responsive" alt=""/>
                <h3><a href="#">{book.title} </a></h3>
                <p>{book.author}</p>
              </div>
          </li>
                    </>
                )
                
            })
            
        }
        
        {/*  */}
     
      
    </ul>
  </div>
</section>
    
    </>
    
  )
}

export default ListNews