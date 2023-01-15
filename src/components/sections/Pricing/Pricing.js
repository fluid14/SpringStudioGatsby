import React from 'react';
import PackageOption from '../../shared/PackageOption/PackageOption';

const Pricing = ({ data }) => {
  const {
    title,
    description: {
      data: {
        childMarkdownRemark: { html: description },
      },
    },
    addnotation: {
      data: {
        childMarkdownRemark: { html: addnotation },
      },
    },
    package_options: packageOptions,
    componentId,
  } = data;

  return (
    <section
      className="pt-[50px] pb-[50px] md:pt-24 md:pb-32 bg-blueGray-50 overflow-hidden"
      id={componentId}
    >
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
          {title}
        </h2>
        <div className="mb-5 md:mb-16 flex flex-wrap justify-between -m-4">
          <div className="w-auto p-4">
            <div className="md:max-w-md">
              <div
                className="text-lg text-gray-900 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden border border-blueGray-200 rounded-3xl mb-4">
          <div className="flex flex-wrap divide-y md:divide-x lg:divide-y-0 divide-blueGray-200">
            {packageOptions.map((option) => (
              <PackageOption data={option} key={option.title} />
            ))}
          </div>
        </div>
        <div
          className="text-gray-500 text-center p-2"
          dangerouslySetInnerHTML={{ __html: addnotation }}
        />
      </div>
    </section>
  );
};

export default Pricing;
