import './bookList.css';
import BookItem from '../bookItem/BookItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../../models/Book';

type Props = {
  addToCart : () => void,
  removeFromCart : () => void
}

function BookList({ addToCart, removeFromCart } : Props) {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/books.json')
      .then(response => {
        setBookList(response.data);
      })
  }, []);

  return (
    <section className="page-booklist">
      <div className="booklist content-wrapper">
        {
          bookList.map((book, index) => {
            return <BookItem key={ index } addToCart={ addToCart } removeFromCart={ removeFromCart } book={ book } />
          })
        }
      </div>
    </section>
  )
}

export default BookList
