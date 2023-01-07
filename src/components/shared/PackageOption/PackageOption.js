import React from "react";

const PackageOption = ({data}) => {
    const {title, description: {data: description}, price, priceAdditional, type, options, isMark} = data;

    return (<div className="w-full lg:w-1/2 xl:w-1/4">
            <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90">
                <div className="lg:min-h-[133px] xl:min-h-[185px] 2xl:min-h-[159px]"><span
                    className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">{title}</span>
                    <p className="mb-6 text-gray-500 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>
                <div>
                    <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">
                        <span>{price}</span>
                    </h3>
                    <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">{priceAdditional}</p>
                    {!isMark &&
                        <button
                            className="chooseBtn mb-9 py-4 px-9 w-full font-medium border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                            type="button" data-type={type}>
                            Wybieram
                        </button>
                    }

                    {isMark &&
                        <button
                            className="chooseBtn mb-9 py-4 px-9 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                            type="button" data-type={type}>
                            Wybieram
                        </button>
                    }
                    <ul>
                        {options.length > 0 && options.map(({text}) => (
                            <li className="mb-4 flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
                                          stroke="#4F46E5" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PackageOption;
