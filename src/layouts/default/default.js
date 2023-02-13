import React from 'react';
import Theme from '../../theme/Theme';
import Header from '../../components/sections/Header/Header';
import ContactWithClients from '../../components/sections/ContactWithClients/ContactWithClients';
import WhatWeDo from '../../components/sections/WhatWeDo/WhatWeDo';
import Steps from '../../components/sections/Steps/Steps';
import Pricing from '../../components/sections/Pricing/Pricing';
import Faq from '../../components/sections/Faq/Faq';
import Contact from '../../components/sections/Contact/Contact';
import Seo from '../../components/seo';

const Default = ({ pageContext: { data } }) => (
  <Theme>
    {data.map((component) => {
      const { strapi_component: componentType, id } = component;

      switch (componentType) {
        case 'sections.header':
          return <Header data={component} key={id} />;

        case 'sections.contact-with-clients':
          return <ContactWithClients data={component} key={id} />;

        case 'sections.what-we-do':
          return <WhatWeDo data={component} key={id} />;

        case 'sections.steps':
          return <Steps data={component} key={id} />;

        case 'sections.pricing':
          return <Pricing data={component} key={id} />;

        case 'sections.faq':
          return <Faq data={component} key={id} />;

        case 'sections.contact':
          return <Contact data={component} key={id} />;

        default:
          return null;
      }
    })}
  </Theme>
);

export default Default;

export const Head = ({ pageContext: { seo } }) => <Seo {...seo} />;
