import React from 'react';

const Step = ({ data }) => {
  const {
    icon: { localFile, alternativeText: iconAlt },
    title,
    description: {
      data: {
        childMarkdownRemark: { html: description },
      },
    },
    isSpecialIcon,
  } = data;

  return (
    <div className="w-full xl:w-1/4 p-8">
      <div className="text-center">
        {!isSpecialIcon && (
          <div className="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={localFile?.url} alt={iconAlt} />
            </div>
            <div className="hidden xl:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200" />
          </div>
        )}

        {isSpecialIcon && (
          <div className="relative z-10 bg-indigo-600 w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={localFile?.url} alt={iconAlt} />
            </div>
          </div>
        )}

        <div className="md:max-w-xs mx-auto">
          <h3 className="mb-4 font-heading text-xl font-bold font-heading leading-normal">
            {title}
          </h3>
          <div
            className="text-gray-600 font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default Step;
