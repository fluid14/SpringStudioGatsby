import React from "react";
import Theme from "../../theme/Theme";
import Header from "../../components/sections/Header/Header";
import ContactWithClients from "../../components/sections/ContactWithClients/ContactWithClients";

const Default = ({pageContext: {data}}) => {
    console.log(data);

    return (
        <Theme>
            {data.map((component) => {
                const {strapi_component: componentType, id} = component;
                switch (componentType) {
                    case 'sections.header':
                        return <Header data={component} key={id} />;

                    case 'sections.contact-with-clients':
                        return <ContactWithClients data={component} key={id}/>;

                    default:
                        return null

                }
            })}
        </Theme>
    )
}

export default Default;
