import React from "react";

const Footer = () => (
    <footer className="relative py-[50px] md:py-24 bg-indigo-600 overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                    <div className="lg:max-w-sm">
                        <h2 className="mb-16 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">Porozmawiajmy
                            o Twojej stronie internetowej</h2>
                        <div className="md:inline-block"><a
                            className="py-4 px-6 w-full text-indigo-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                            href="#kontakt">Napisz do nas</a></div>
                    </div>
                </div>
                <div className="flex flex-col justify-end w-full md:w-1/2 p-8">
                    <div className="flex flex-wrap -m-8 mb-10">
                        <div className="flex w-full p-8">
                            <ul>
                                <li className="mb-3.5 mr-5"><a
                                    className="text-white hover:text-gray-200 font-medium leading-relaxed"
                                    href="#jakToDziała?">Jak to działa?</a></li>
                                <li className="mb-3.5 mr-5"><a
                                    className="text-white hover:text-gray-200 font-medium leading-relaxed"
                                    href="#aleIleToKosztuje?">Cennik</a></li>
                                <li className="mb-3.5"><a
                                    className="text-white hover:text-gray-200 font-medium leading-relaxed"
                                    href="#kontakt">Kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-white text-opacity-50 font-medium leading-relaxed">Copyright © 2022
                        SpringStudio. Wszystkie prawa zastrzeżone.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
