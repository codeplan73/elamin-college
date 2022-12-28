import React from 'react'
import image from '../assets/profile.jpeg'

const Team = () => {
  return (
    <div className="flex flex-col gap-3 items-center py-12">
      <h2 className="text-2xl text-gray-800 text-center pt-4">
        Our Team / Staff
      </h2>
      <hr className="border-teal-700 font-extrabold mx-auto w-36" />
      <div class="flex flex-col md:flex-row justify-start items-center gap-4">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!">
            <img
              class="rounded object-fill h-auto"
              src={image}
              alt=""
              style={{ height: '210px', width: '100%' }}
            />
          </a>
          <div class="p-6">
            <h4 class="text-gray-900 text-xl font-medium mb-2">Staff Name</h4>
            <h5 class="text-gray-900 text-sm font-sm mb-2">Staff Position</h5>
          </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!">
            <img
              class="rounded object-fill h-auto"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
              style={{ height: '210px', width: '100%' }}
            />
          </a>
          <div class="p-6">
            <h4 class="text-gray-900 text-xl font-medium mb-2">Staff Name</h4>
            <h5 class="text-gray-900 text-sm font-sm mb-2">Staff Position</h5>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-xs">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
