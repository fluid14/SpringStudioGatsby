import React, { useEffect, useRef } from 'react';
import arrowDown from '/static/icons/arrowDown.svg';

const FaqElement = ({ data }) => {
  const {
    question,
    answer: {
      data: {
        childMarkdownRemark: { html: answer },
      },
    },
    id,
  } = data;

  const accordionElement = useRef(null);

  useEffect(() => {
    const accordions = document.querySelectorAll('.accordion');

    const handleClick = (e) => {
      e.preventDefault();
      accordions.forEach((element) => {
        if (element.id !== id) {
          const text = element.querySelector('.accordionText');
          text.classList.add('hidden');
        }
      });
      const textWrap = accordionElement.current.querySelector('.accordionText');
      textWrap.classList.toggle('hidden');
    };
    accordionElement.current.addEventListener('click', (e) => handleClick(e));

    return () => accordionElement.current.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="w-full p-1">
      <a className="accordion" href="#" ref={accordionElement} id={id}>
        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
          <div className="flex flex-wrap justify-between -m-2">
            <div className="flex-1 p-2">
              <h3 className="text-lg font-semibold leading-normal">{question}</h3>
              <div
                className="mt-4 text-gray-600 font-medium accordionText hidden"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </div>
            <div className="w-auto p-2">
              <img src={arrowDown} alt="strzałka" height="18" width="18" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FaqElement;
