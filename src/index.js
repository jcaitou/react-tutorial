//these are from node modules
import React from 'react';
import ReactDom from 'react-dom';

//these are custom imports - need a relative filepath
//CSS
import './index.css'

//named export - name needs to match exactly
//js file - extension doesn't need to be explicit
import {books} from './books'

//default export: you can actually change the name "Book" to anything you want
import Book from './Book'



//capitalize name = React recognizes it as a component
function BookList() {
  //returns JSX, not technically HTML
  return (
    <section className='booklist'>
      {books.map((book)=>{
        const {img,title,author} = book;
        //each child in list needs unique ID. otherwise there will be a error in console log
        return <Book key={book.id} {...book}>       
        </Book>
      })}
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));