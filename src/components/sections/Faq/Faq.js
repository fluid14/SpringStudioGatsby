import React from "react";
import gradient from '/static/images/faq/gradient.svg';
import FaqElement from "../../shared/FaqElement/FaqElement";

const Faq = ({data}) => {
    console.log(data);

    const {
        signature,
        title,
        additional: {data: {childMarkdownRemark: {html: additional}}},
        faqElement
    } = data;

    return (<section className="relative py-[50px] md:py-24 md:pb-12 bg-blueGray-50 overflow-hidden">
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src={gradient} alt="Kontakt"/>
            <div className="relative z-10 container px-4 mx-auto">
                <div className="md:max-w-4xl mx-auto">
                    <p className="mb-6 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
                        {signature}
                    </p>
                    <h2 className="mb-10 md:mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
                        {title}
                    </h2>
                    <div className="mb-11 flex flex-wrap -m-1">
                        {faqElement.length > 0 && faqElement.map(element => <FaqElement data={element} key={element.id}/>)}
                    </div>
                    <div className="text-gray-600 text-center font-medium"
                         dangerouslySetInnerHTML={{__html: additional}}/>
                </div>
            </div>
        </section>
    )
};

export default Faq;
