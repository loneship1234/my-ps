import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {Link} from 'react-router-dom';
function BreadCrump({name,id}) {
  return (
<nav aria-label="Breadcrumb">
  <ol  class="flex items-center space-x-1 text-sm text-gray-500">
    <li>
      <Link class="block transition-colors hover:text-gray-700" to="/">
        <span class="sr-only"> Home </span>

        <BiHomeAlt className=''/>
      </Link>
    </li>

    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </li>

    <li>
      <Link class="block transition-colors hover:text-gray-700 capitalize" to={'/game-catalog'}> game catalog </Link>
    </li>

    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </li>

    <li>
      <Link class="block transition-colors capitalize hover:text-gray-700" to={`/game-catalog/${id}`}>{name}</Link>
    </li>
  </ol>
</nav>

  )
}

export default BreadCrump