import React from "react";
import Step from "../../shared/Step/Step";

const Steps = ({data}) => {
    const {signature, title, steps} = data;

    return(
        <section className="relative pt-[60px] pb-[60px] md:pt-28 md:pb-24 bg-white overflow-hidden" id="jakToDziała?">
            <div className="relative z-10 container px-4 mx-auto">
                <p className="mb-6 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
                    {signature}
                </p>
                <h2 className="mb-10 md:mb-20 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">
                    {title}
                </h2>
                <div className="flex flex-wrap -m-8">
                    {steps.map((step) => <Step data={step} key={step.title} />)}
                </div>
            </div>
        </section>

    )
};

export default Steps;
