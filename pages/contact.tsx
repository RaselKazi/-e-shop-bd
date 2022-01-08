import React from 'react'
import Layout from '../components/Layout/Layout'
import Breadcrumb from '../utils/Breadcrumb'

function contact() {
  return (
    <Layout>
      <Breadcrumb></Breadcrumb>

      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        {/* ------map-------- */}
        <div className=" h-screen">
          <div className=" mb-8">
            <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
              FOLLOW ME ON MAP
            </h3>
          </div>
          <iframe
            className=" w-full h-4/5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.81756165847!2d-100.97926321868432!3d22.150645181180668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa201fc90fffb%3A0x318299fedfad4ff6!2sCentro%20Historico%2C%2078000%20San%20Luis%20Potos%C3%AD%2C%20San%20Luis%20Potosi%2C%20Mexico!5e0!3m2!1sen!2sbd!4v1626243463377!5m2!1sen!2sbd"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <div className=" grid sm:grid-cols-3 gap-20">
          <div className=" col-span-2">
            <div className=" mb-8">
              <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
                SEND ME A MESSAGE
              </h3>
            </div>

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
          </div>

          <div className="">
            <div className=" mb-8">
              <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
                CONTACT US
              </h3>
            </div>

            <div>
              <ul>
                <li className=" text-gray-500 mb-4">
                  <span className=" inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill h-4 w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </span>
                  <span className=" ml-3">
                    {' '}
                    San Luis Potosí, Centro Historico, SPL, Mexico
                  </span>
                </li>
                <li className=" text-gray-500 mb-4">
                  <a href="tel:+8801700000">
                    <span className=" inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-telephone-fill w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <span className=" ml-3">(+880)17000000</span>
                  </a>
                </li>
                <li className=" text-gray-500 mb-4">
                  <a href="">
                    <span className=" inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-envelope w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                    </span>
                    <span className=" ml-3">@gmail.com</span>
                  </a>
                </li>
                <li className=" text-gray-500 mb-4">
                  <span className=" inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-clock w-4 h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </span>
                  <span className=" ml-3">Open Time: 8:00AM - 6:00PM</span>
                </li>
              </ul>
            </div>

            {/* ------Share--------- */}
            <div className=" flex items-center mt-10">
              <a
                className="mr-2 p-2 hover:shadow-2xl duration-300 bg-blue-800 text-white transform hover:-translate-y-1"
                href="#"
              >
                <svg
                  className="svg-inline--fa fa-facebook-f fa-w-10 w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>

              <a
                className="mr-2 p-2 hover:shadow-2xl duration-300 bg-blue-400 text-white transform hover:-translate-y-1"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter w-4 h-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>

              <a
                className="mr-2 p-2 hover:shadow-2xl duration-300 bg-red-600 text-white transform hover:-translate-y-1"
                href="#"
              >
                <svg
                  className="svg-inline--fa fa-pinterest-p fa-w-12 w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                  ></path>
                </svg>
              </a>

              <a
                className="mr-2 p-2 hover:shadow-2xl duration-300 bg-pink-600 text-white transform hover:-translate-y-1"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-instagram w-4 h-4 "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              <a
                className="mr-2 p-2 hover:shadow-2xl duration-300 bg-red-500 text-white transform hover:-translate-y-1"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact
