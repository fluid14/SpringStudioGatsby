import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";

const ContactWithClients = ({data}) => {
    const {
        title,
        description: {data: {childMarkdownRemark: {html: description}}},
        image: {alternativeText: imageAlt, localFile: {childImageSharp: {gatsbyImageData: image}}},
        componentId
    } = data;

    return (
        <section className="relative bg-white overflow-hidden mb-5 sm:mb-16" id={componentId}>
            <div className="relative z-10 container px-4 mx-auto flex flex-wrap lg:items-center -m-8">
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="mb-8 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                        {title}
                    </h2>
                    <div className="mb-9 text-lg text-gray-600 font-medium leading-normal"
                         dangerouslySetInnerHTML={{__html: description}}/>

                </div>
                <div className="w-full hidden lg:block md:w-1/2 p-8 pb-0 self-end">
                    <GatsbyImage className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
                                 alt={imageAlt} image={image}/>
                </div>
            </div>
        </section>

    )
}

export default ContactWithClients;
