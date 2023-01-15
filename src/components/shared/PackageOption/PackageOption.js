import React, { useEffect, useRef } from 'react';
import bird from '../../../../static/icons/bird.svg';

const PackageOption = ({ data }) => {
  const {
    title,
    description: { data: description },
    price,
    priceAdditional,
    chooseContactLabel,
    options,
    isMark,
  } = data;

  const chooseButtonRef = useRef(null);
  const chooseButtonMarkRef = useRef(null);

  useEffect(() => {
    const onPageLoad = () => {
      const chooseButton = chooseButtonRef.current;
      const chooseButtonMark = chooseButtonMarkRef.current;

      const contactForm = document.getElementById('kontakt');
      const formTitle1 = document.getElementById('formTitle1');
      const formTitle2 = document.getElementById('formTitle2');

      const onClick = (btn) => {
        btn.addEventListener('click', () => {
          contactForm.scrollIntoView();
          contactForm.querySelector('#package').value = chooseContactLabel;
          let formTitleText;

          chooseContactLabel
            ? (formTitleText = chooseContactLabel)
            : (formTitleText = 'Masz pytania?');

          formTitle1.textContent = formTitleText;
          formTitle1.classList.add('mb-3');
          formTitle1.classList.remove('mb-0');
          formTitle2.textContent = 'Zostaw swój kontakt';
        });
      };

      if (chooseButton) chooseButton.addEventListener('click', () => onClick(chooseButton));
      if (chooseButtonMark)
        chooseButtonMark.addEventListener('click', () => onClick(chooseButtonMark));
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="w-full lg:w-1/2 xl:w-1/4">
      <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90">
        <div className="lg:min-h-[133px] xl:min-h-[185px] 2xl:min-h-[159px]">
          <span className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">
            {title}
          </span>
          <p className="mb-6 text-gray-500 font-medium leading-relaxed">{description}</p>
        </div>
        <div>
          <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">
            <span>{price}</span>
          </h3>
          <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">
            {priceAdditional}
          </p>
          {!isMark && (
            <button
              className="chooseBtn mb-9 py-4 px-9 w-full font-medium border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
              type="button"
              ref={chooseButtonRef}
            >
              Wybieram
            </button>
          )}

          {isMark && (
            <button
              className="chooseBtn mb-9 py-4 px-9 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
              ref={chooseButtonMarkRef}
            >
              Wybieram
            </button>
          )}
          <ul>
            {options.length > 0 &&
              options.map(({ text, id }) => (
                <li className="mb-4 flex items-center" key={id}>
                  <img src={bird} alt="opcja" />
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
