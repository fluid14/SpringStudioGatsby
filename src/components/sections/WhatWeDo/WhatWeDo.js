import React from 'react';
import WhatWeDoBlock from '../../shared/WhatWeDoBlock/WhatWeDoBlock';

const WhatWeDo = ({ data }) => {
  const {
    title,
    description: {
      data: {
        childMarkdownRemark: { html: description },
      },
    },
    whatWeDoBlock,
    componentId,
  } = data;

  return (
    <section
      className="pt-[50px] pb-[50px] md:pt-32 md:pb-36 bg-indigo-600 overflow-hidden"
      id={componentId}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-2xl">
          <h2 className="mb-9 text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none">
            {title}
          </h2>
          <div
            className="mb-10 md:mb-20 xl:mb-36 text-white text-opacity-70"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="grid md:grid-cols-1 xl:grid-cols-2 -m-3">
          {whatWeDoBlock.map((data) => (
            <WhatWeDoBlock data={data} key={data.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
