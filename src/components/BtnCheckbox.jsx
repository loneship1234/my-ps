import React from 'react'

function BtnCheckbox({children}) {
  return (
    <label for="material_cotton" class="cursor-pointer">
    <input type="radio" id="material_cotton" name="material" class="sr-only peer" checked />
    <span class="block px-3 py-1  border border-gray-200 rounded-lg peer-checked:ring-2 ring-blue-600 ring-opacity-70 font-semibold tracking-wider text-md capitalize ">
    {children}
    </span>
  </label>
  )
}

export default BtnCheckbox