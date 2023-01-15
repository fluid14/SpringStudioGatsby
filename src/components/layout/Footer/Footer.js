import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const FooterComponent = ({
  data: {
    strapiGlobal: { footer },
  },
}) => {
  const {
    cta: { href: ctaHref, label: ctaLabel, isExternal: ctaIsExternal },
    label,
    links,
  } = footer;

  return (
    <footer className="relative py-[50px] md:py-24 bg-indigo-600 overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="lg:max-w-sm">
              <h2 className="mb-16 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">
                {label}
              </h2>
              <div className="md:inline-block">
                <a
                  className="py-4 px-6 w-full text-indigo-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  href={ctaHref}
                  target={ctaIsExternal ? '_blank' : ''}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end w-full md:w-1/2 p-8">
            <div className="flex flex-wrap -m-8 mb-10">
              <div className="flex w-full p-8">
                <ul>
                  {links.length > 0 &&
                    links.map(({ href, label, isExternal, id }) => (
                      <li className="mb-3.5 mr-5" key={id}>
                        <a
                          className="text-white hover:text-gray-200 font-medium leading-relaxed"
                          href={href}
                          target={isExternal ? '_blank' : ''}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-white text-opacity-50 font-medium leading-relaxed">
              Copyright © {new Date().getFullYear()}
              &nbsp;SpringStudio. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Footer(props) {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          strapiGlobal {
            footer {
              cta {
                href
                label
                isExternal
              }
              label
              links {
                id
                href
                isExternal
                label
              }
            }
          }
        }
      `}
      render={(data) => <FooterComponent data={data} {...props} />}
    />
  );
}
