import React from 'react'
import Button from './button/Button'
import { getPagesArray } from '../utils/pages';

export default function Pagination({totalPages, changePage, currentPage}) {
    let pagesArray = getPagesArray(totalPages);

  return (
    <div>
        {
        pagesArray.map(el => 
          <Button
            key={el}
            className={currentPage === el ? 'page__current': ''}
            onClick = {() => changePage(el)}
          >{el}</Button>
        )
      }
    </div>
  )
}
