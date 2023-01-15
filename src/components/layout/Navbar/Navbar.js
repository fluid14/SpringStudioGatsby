import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { useEffect, useRef } from 'react';

const NavbarComponent = ({ data: { strapiGlobal } }) => {
  const {
    navigation: {
      cta: { href: ctaHref, label: ctaLabel },
      links,
    },
    logo: {
      alternativeText: logoAlt,
      localFile: { url: logoUrl },
    },
  } = strapiGlobal;

  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const burger = burgerRef.current;
    const menu = menuRef.current;
    const backdrop = backdropRef.current;
    const close = closeRef.current;

    const onPageLoad = () => {
      if (burger && menu) {
        [burger, menu, backdrop].forEach((element) => {
          element.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            backdrop.classList.toggle('hidden');
          });
        });
      }

      if (close && menu) {
        close.addEventListener('click', () => {
          menu.classList.remove('hidden');
          backdrop.classList.remove('hidden');
        });
      }
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  <img className="nav-logo" src={logoUrl} alt={logoAlt} />
                </a>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  {links.length > 0 &&
                    links.map(({ href, label, id }) => (
                      <li className="mr-9 font-medium hover:text-gray-700" key={id}>
                        <a href={href}>{label}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <a
                    className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                    href={ctaHref}
                  >
                    {ctaLabel}
                  </a>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#" id="navbar-burger" ref={burgerRef}>
                  <svg
                    className="navbar-burger text-indigo-600"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden navbar-backdrop fixed inset-0 bg-gray-800 opacity-80 z-49"
          id="navbar-backdrop"
          ref={backdropRef}
        ></div>
        <div
          className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
          id="navbar-menu"
          ref={menuRef}
        >
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img className="nav-logo" src={logoUrl} alt={logoAlt} />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#" id="navbar-close" ref={closeRef}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-16 w-full">
                <ul>
                  {links.length > 0 &&
                    links.map(({ href, label, id }) => (
                      <li className="mb-12" key={id}>
                        <a className="font-medium hover:text-gray-700" href={href}>
                          {label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <a
                        className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                        href={ctaHref}
                      >
                        {ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default function Navbar(props) {
  return (
    <StaticQuery
      query={graphql`
        query Navbar {
          strapiGlobal {
            logo {
              alternativeText
              localFile {
                url
              }
            }
            navigation {
              cta {
                label
                isExternal
                href
                id
              }
              links {
                href
                id
                isExternal
                label
              }
            }
          }
        }
      `}
      render={(data) => <NavbarComponent data={data} {...props} />}
    />
  );
}
