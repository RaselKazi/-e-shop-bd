import React from 'react'

export default function ContactForm() {
  return (
    <form action="contact" className=" text-gray-500">
      <div className=" grid sm:grid-cols-2 gap-6 mb-5">
        <div>
          <label className=" text-sm font-bold" for="name">
            First Name
          </label>
          <input
            className="p-4 shadow rounded h-10 w-full bg-gray-100 focus:outline-none "
            type="text"
          ></input>
        </div>

        <div>
          <label className=" text-sm font-bold" for="name">
            Last Name
          </label>
          <input
            className="p-4 shadow rounded h-10 w-full bg-gray-100 focus:outline-none "
            type="text"
          ></input>
        </div>
      </div>

      <div className="mb-5">
        <label className=" text-sm font-bold" for="name">
          Email <span className=" text-red-500">*</span> ({' '}
          <a className="text-blue-400" href="privacy-policy.html">
            privacy policy
          </a>{' '}
          )
        </label>
        <input
          className="p-4 shadow rounded h-10 w-full bg-gray-100 focus:outline-none "
          type="text"
          required
        ></input>
      </div>

      <div className="mb-5">
        <label className=" text-sm font-bold" for="name">
          Messages <span className=" text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          className=" w-full resize-none h-40 p-4 shadow rounded bg-gray-100 focus:outline-none"
          required
        >
          I'm interested in learning more about...
        </textarea>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-gray-800 hover:bg-opacity-90 px-7 rounded text-sm text-white font-medium duration-200"
      >
        Send Message
      </button>
    </form>
  )
}
