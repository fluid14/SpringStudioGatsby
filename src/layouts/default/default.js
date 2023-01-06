import React from "react";
import Theme from "../../theme/Theme";
import Header from "../../components/sections/Header/Header";

const Default = ({pageContext: {data}}) => {
    console.log(data);

    return (
        <Theme>
            {data.map((component) => {
                const {strapi_component: componentType} = component;
                switch (componentType) {
                    case 'sections.header':
                        return <Header data={component}/>;

                    default:
                        return null

                }
            })}
        </Theme>
    )
}

export default Default;
