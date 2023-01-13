import React from "react";
import {StaticQuery, graphql} from "gatsby";
import gradient from '/static/images/contact/gradient2.svg'

const ContactComponent = ({data, global}) => {
    const {
        signature, label: {data: {childMarkdownRemark: {html: label}}}, componentId
    } = data;

    const {strapiGlobal: {phoneNumber, email}} = global;

    return (
        <section className="relative py-[50px] md:py-24 bg-gray-50 overflow-hidden" id={componentId}>
            <img className="absolute bottom-0 right-0" src={gradient} alt="gradient"/>
            <div className="relative z-10 container px-4 mx-auto">
                <div className="flex flex-wrap -m-8">
                    <div className="w-full lg:w-1/2 p-8">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-12 md:max-w-md block">
                                <p className="mb-6 text-sm text-indigo-600 font-bold uppercase tracking-px">{signature}</p>
                                <div dangerouslySetInnerHTML={{__html: label}}/>
                            </div>
                            <div className="block">
                                <p className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-px">Email</p>
                                <ul className="mb-5">
                                    <li className="text-xl font-semibold leading-normal">
                                        <a href={`mailto: ${email}`}>{email}</a>
                                    </li>
                                </ul>
                                <p className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-px">Telefon</p>
                                <ul>
                                    <li className="text-xl font-semibold leading-normal">
                                        <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <form
                            className="px-[20px] py-[30px] sm:px-11 sm:py-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl">
                            <label className="block mb-4">
                                <input
                                    className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                                    id="name" type="text" placeholder="Imię i nazwisko" name="name"
                                    required="required"/>
                            </label>
                            <label className="block mb-4">
                                <input
                                    className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                                    id="email" type="email" placeholder="Email" name="email" required="required"/>
                            </label>
                            <label className="block mb-4">
                                <input
                                    className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                                    id="phone" type="text" placeholder="Telefon" name="phone" required="required"/>
                                <label className="block mb-4">
                                    <input
                                        className="hidden px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                                        id="package" type="text" placeholder="Pakiet" name="package"/>
                                </label>
                            </label>
                            <label className="block mb-4">
                                <textarea
                                    className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300"
                                    id="message" placeholder="Wiadomość" name="message"></textarea>
                            </label>
                            <button
                                className="py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                                type="submit">Wyślij wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default function Contact(props) {
    return (
        <StaticQuery query={graphql`
                query Contact {
                  strapiGlobal {
                    email
                    phoneNumber
                  }
                }
              `}
            render={data => <ContactComponent global={data} {...props} />}
        />
    )
};
