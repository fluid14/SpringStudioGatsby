document.addEventListener('DOMContentLoaded', function () {
    // Burger menus
    const burger = document.getElementById('navbar-burger') || null;
    const menu = document.getElementById('navbar-menu') || null;
    const backdrop = document.getElementById('navbar-backdrop');
    const close = document.getElementById('navbar-close');


    if (burger && menu) {
        [burger, menu, backdrop].forEach(element => {
                element.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                    backdrop.classList.toggle('hidden');
                })
            }
        )
    }

    if(close && menu){
        close.addEventListener('click', () => {
            menu.classList.remove('hidden');
            backdrop.classList.remove('hidden');
        })
    }

    // Pricing
    const chooseButtons = document.querySelectorAll('.chooseBtn');
    const contactForm = document.getElementById('kontakt');
    const formTitle1 = document.getElementById('formTitle1');
    const formTitle2 = document.getElementById('formTitle2');

    if (chooseButtons.length > 0) {
        chooseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const chooseType = btn.dataset.type
                contactForm.scrollIntoView();
                contactForm.querySelector('#package').value = chooseType;
                let formTitleText;

                switch (chooseType) {
                    case 'wizytowka':
                        formTitleText = 'Wybrałeś stronę wizytówkę.'
                        break;
                    case 'cos_wiecej':
                        formTitleText = 'Wybrałeś coś więcej.'
                        break;
                    case 'zaawansowana':
                        formTitleText = 'Wybrałeś zaawansowaną stronę.'
                        break;
                    case 'projekt_indywidualny':
                        formTitleText = 'Wybrałeś projekt indywidualny.'
                        break;
                    default:
                        formTitleText = 'Masz pytania?'
                        break;
                }

                formTitle1.textContent = formTitleText;
                formTitle1.classList.add('mb-3');
                formTitle1.classList.remove('mb-0');
                formTitle2.textContent = 'Zostaw swój kontakt'
            })
        })
    }

//    Accordion
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', e => {
            e.preventDefault();
            accordions.forEach(element => {
                if(element !== accordion) {
                    const text = element.querySelector('.accordionText');
                    text.classList.add('hidden');
                }
            })

            const textWrap = accordion.querySelector('.accordionText');
            textWrap.classList.toggle('hidden');
        })
    })
});



