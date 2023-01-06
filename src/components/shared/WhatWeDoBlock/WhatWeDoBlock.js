import React from "react";

const WhatWeDoBlock = ({data}) => {
    const {
        title,
        description: {data: {childMarkdownRemark: {html: description}}},
        icon: {localFile: {url: icon}, iconAlt}
    } = data;

    return (
        <div className="w-full p-3">
            <div className="p-7 bg-white border border-gray-400 rounded-3xl w-full h-full">
                <div className="flex flex-wrap flex-col md:flex-row -m-4">
                    <div className="w-auto p-4 pb-0 md:pb-4">
                        <img src={icon} alt={iconAlt}/>
                    </div>
                    <div className="flex-1 p-4">
                        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                        <div className="text-gray-600 font-medium" dangerouslySetInnerHTML={{__html: description}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WhatWeDoBlock;
