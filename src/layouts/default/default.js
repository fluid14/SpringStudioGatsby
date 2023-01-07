import React from "react";
import Theme from "../../theme/Theme";
import Header from "../../components/sections/Header/Header";
import ContactWithClients from "../../components/sections/ContactWithClients/ContactWithClients";
import WhatWeDo from "../../components/sections/WhatWeDo/WhatWeDo";
import Steps from "../../components/sections/Steps/Steps";
import Pricing from "../../components/sections/Pricing/Pricing";

const Default = ({pageContext: {data}}) => {
    console.log(data);

    return (
        <Theme>
            {data.map((component) => {
                const {strapi_component: componentType, id} = component;
                console.log(componentType)
                switch (componentType) {
                    case 'sections.header':
                        return <Header data={component} key={id} />;

                    case 'sections.contact-with-clients':
                        return <ContactWithClients data={component} key={id}/>;

                    case 'sections.what-we-do':
                        return <WhatWeDo data={component} key={id}/>;

                    case 'sections.steps':
                        return <Steps data={component} key={id}/>;

                    case 'sections.pricing':
                        return <Pricing data={component} key={id}/>;

                    default:
                        return null

                }
            })}
        </Theme>
    )
}

export default Default;
