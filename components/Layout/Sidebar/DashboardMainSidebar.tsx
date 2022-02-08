import Link from 'next/link'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'
import { DashboardMenuItem } from '../../../data/DashboardData'

function DashboardMainSidebar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const router = useRouter()
  const goTo = (
    title: SetStateAction<string>,
    link: string,
    dropdown: boolean
  ) => {
    dropdown && router.push(link)

    active === '' ? setActive(title) : setActive('')
  }

  return (
    <div>
      {/* <!-- Mobile Menu Toggle --> */}
      <button
        className=" z-50 focus:outline-none md:hidden text-sky-500 fixed top-6 right-8 "
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {/*Menu Icons */}
        {mobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        className={` h-screen z-50 
        bg-gray-900 transition-all duration-300 space-y-2 border-r border-sky-800    ${
          open ? 'sm:w-20 w-64' : 'w-64'
        } ${
          mobileMenu
            ? 'absolute top-0 left-0'
            : 'hidden sticky md:block top-0 -left-64 '
        }`}
      >
        <h1
          className="text-white text-center font-black py-4 relative"
          // x-bind:className="$store.sidebar.full ? 'text-2xl px-4' : 'text-xl px-4 xm:px-2'"
        >
          <Link href="/">LOGO</Link>
          <span
            className="
            hidden z-50
            md:block border
            border-sky-500
             text-sky-500
            absolute  
            -right-3
            top-4
           bg-gray-900
            shadow-md rounded-md
          "
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`text-sky-500 h-6 w-6 transition-all duration-300 transform ${
                open ? '-rotate-90' : ' rotate-90'
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </h1>

        <div className="px-4 space-y-2  ">
          {/* <!-- SideBar Toggle --> */}

          {DashboardMenuItem.map((menu) => {
            return (
              <div
                className="relative "
                onClick={() =>
                  goTo(menu.title, `${menu.link}`, menu.dropdown.length === 0)
                }
              >
                <div
                  className={`flex
              justify-between
              text-sky-300 hover:text-sky-600 transition duration-200 hover:bg-gray-800
              items-center
              space-x-2
              rounded-md
              p-2
              cursor-pointer group ${
                open ? 'sm:justify-center' : 'justify-start'
              } ${
                    active === menu.title
                      ? 'text-gray-200 bg-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  <div className="relative flex space-x-2 items-center">
                    {menu.icon}
                    <h1
                      className={` ${
                        open
                          ? 'sm:hidden hidden  group-hover:block sm:absolute top-0 left-14 sm:border border-sky-600 sm:text-md sm:bg-gray-900 sm:px-2 sm:py-1 sm:rounded-md transition duration-300'
                          : ''
                      }`}
                    >
                      {menu.title}
                    </h1>
                  </div>

                  {menu.dropdown.length === 0 ? (
                    menu.title === 'Chat' ? (
                      <h1
                        className={`w-5 h-5 p-1 text-base bg-red-500 rounded-md leading-3 text-center text-white ${
                          open ? ' absolute top-0 left-5' : ''
                        }`}
                      >
                        8
                      </h1>
                    ) : (
                      ''
                    )
                  ) : (
                    <svg
                      className={`h-4 w-4  ${
                        active === menu.title
                          ? ' transition duration-300 rotate-180'
                          : 'transition duration-300 rotate-0'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* <!-- Dropdown content --> */}

                {active === menu.title ? (
                  <div
                    className={`text-gray-400 space-y-3  ${
                      open
                        ? 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 sm:ml-0 w-28 border-2 border-sky-800 '
                        : 'border-l border-dashed border-gray-400 ml-4'
                    }`}
                  >
                    {/* <!-- Sub Dropdown  --> */}
                    {/* <div x-data="sub_dropdown" className="relative w-full">
                      <div className="flex items-center justify-between cursor-pointer">
                        <h1 className="hover:text-gray-200 cursor-pointer">
                          Item 3
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                      // x-show="sub_open"
                      // @click.outside="sub_open = false"
                      // x-bind:className="$store.sidebar.full ? sub_expanded className:sub_shrinked className"
                      >
                        <h1 className="hover:text-gray-200 cursor-pointer">
                          Sub Item 1
                        </h1>
                      </div>
                    </div> */}
                    <ul>
                      {menu?.dropdown.map((drop) => {
                        return (
                          <Link href={`${drop.link}`}>
                            <li className=" hover:bg-gray-800 py-2 cursor-pointer transition duration-300">
                              <h1 className="pl-5 text-gray-200 hover:text-sky-500">
                                {drop.title}
                              </h1>
                            </li>
                          </Link>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashboardMainSidebar
