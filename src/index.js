import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'

//setup variables
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}
// const author = 'Amelia Hepworth';
// const title = 'I Love You to the Moon and Back';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg';

//capitalize name = React recognizes it as a component
function BookList() {
  //returns JSX, not technically HTML
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book  img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
  <article className='book'>
    <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>)
}


ReactDom.render(<BookList/>, document.getElementById('root'));