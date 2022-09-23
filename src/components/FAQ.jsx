import React from 'react'

function FAQ({topic,describtion,className}) {
  return (
    <div class={`space-y-4 mx-6 ${className}`}>
      <details class="group" open>
        <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer text-white">
          <h5 class="font-medium ">{topic}</h5>

          <svg
            class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class="px-4 mt-4 leading-relaxed text-gray-700">{describtion}</p>
      </details>
    </div>
  );
}

export default FAQ