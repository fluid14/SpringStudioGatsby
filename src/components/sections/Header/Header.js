import React from "react";
import gradient from '/static/images/headers/gradient3.svg';
import {GatsbyImage} from "gatsby-plugin-image";

const Header = ({data}) => {
    console.log(data)

    const {
        id,
        title,
        description: {data: {childMarkdownRemark: {html: description}}},
        cta: {label: ctaLabel, href: ctaHref},
        image: {alternativeText: imageAlt, localFile: {childImageSharp: {gatsbyImageData: image}}}
    } = data;
    return (
        <header className="mb-10 sm:mb-16" key={id}>
            <div className="overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="relative bg-indigo-50 overflow-hidden rounded-3xl"><img
                        className="absolute left-0 bottom-0" src={gradient}
                        alt="gradient"/>
                        <div className="relative flex flex-wrap justify-between items-end -m-8">
                            <div
                                className="w-full xl:w-1/2 p-[60px] pb-0 md:p-20 md:pb-0 lg:pb-0 lg:pl-28 lg:py-28 xl:pb-20">
                                <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                                    {title}
                                </h2>
                                <div className="mb-10 text-lg text-gray-900 font-medium"
                                     dangerouslySetInnerHTML={{__html: description}}/>
                                <div className="mb-6 md:inline-block">
                                    <a
                                        className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                                        href={ctaHref}>{ctaLabel}
                                    </a>
                                </div>
                            </div>
                            <div className="w-full p-8 px-12 handsWrap">
                                <GatsbyImage image={image} alt={imageAlt}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
