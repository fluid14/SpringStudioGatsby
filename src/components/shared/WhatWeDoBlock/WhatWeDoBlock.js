import React from "react";

const WhatWeDoBlock = ({data}) => {
    const {title, description: {data: {childMarkdownRemark: {html: description}}}} = data;

    return (
        <div className="w-full p-3">
            <div className="p-7 bg-white border border-gray-400 rounded-3xl w-full h-full">
                <div className="flex flex-wrap flex-col md:flex-row -m-4">
                    <div className="w-auto p-4 pb-0 md:pb-4">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                                stroke="#6366F1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                                stroke="#6366F1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                                stroke="#6366F1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className="flex-1 p-4">
                        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                        <div className="text-gray-600 font-medium" dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WhatWeDoBlock;
