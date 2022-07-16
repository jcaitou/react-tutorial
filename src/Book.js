import React from 'react'

const Book = (props) => {
    console.log(props);
    const {img, title, author } = props;
  
    const clickHandler = ()=> {
      alert('hello world');
    }
    const complexExample = (author) => {
      console.log(author);
    }
    return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>example</button>
      <button type="button" onClick={()=>complexExample(author)}>more complex example</button>
    </article>)
  }
//only one default export per file
//can have more named exports

export default Book