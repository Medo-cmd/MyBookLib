
import React,{useState,useEffect} from 'react';
import {getMybooks} from './Utility/MyAction';



const Mybooks = () => {
    const [myBooks , setMyBooks]=useState([]);
    const [Error,setError]=useState('');


    useEffect(async() => {
        let res= await getMybooks();
        console.log(res);
        if(res.success){
            setMyBooks(res.data)
        }else if(!res.success){
            setError(res.error)
        }
    
    }, []);



    return (
    <div>   
    <h1 className='my-4'>My Books</h1>
    {Error ?<p>{Error}</p>:null}
        <div className="parent">
            {myBooks.length?myBooks.map(book=>

            <div className="item" key={book.id}>
                <div className="img-box"><img src={book.imgPath}/></div>
                <div className="text-box">
                    <h1>{book.title}</h1>
                    <p>{book.des}</p>
                    <p className="price">Prise is : {book.price}$</p>
                </div>
            </div>
            )
            :<div className="alert alert-danger alert-dismissible fade show container-fluid " role="alert">
            <strong>Warning!</strong> There are No Books Found!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        }
            
        </div>
    </div>
    );
}

export default Mybooks;
