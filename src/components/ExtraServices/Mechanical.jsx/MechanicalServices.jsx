import React from "react";
import { Link, useLocation } from "react-router-dom";

const MechanicalService = () => {
    const location = useLocation();

    const sidebarItems = [
        { label: "PAINT SERVICES", path: "/services/paint-services" },
        { label: "AC SERVICE", path: "/services/ac-service" },
        { label: "MOT", path: "/services/mot" },
        { label: "MECHANICAL REPAIRS", path: "/services/mechanical-repairs" },
        { label: "BODY/SMART REPAIRS", path: "/services/body-smart-repairs" },
        { label: "SERVICE", path: "/services/service" },
        { label: "DIAGNOSTICS", path: "/services/diagnostics" },
        { label: "DENTS/SCRATCHES", path: "/services/dent-repair" },
    ];

    return (
        <div className="bg-white dark:bg-black transition-colors duration-300">
            <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-16 py-30 gap-8 w-full max-w-screen-xl mx-auto">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/3">
                    <h2 className="text-base font-medium text-gray-500 dark:text-gray-300 uppercase mb-4 lg:-ml-10">
                        Browse Services
                    </h2>
                    <ul className="space-y-4 text-lg lg:text-xl ml-10 lg:-ml-0">
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`block pl-2 transition-all duration-150 ${
                                        location.pathname === item.path
                                            ? "font-semibold border-l-4 border-yellow-500 text-black dark:text-white"
                                            : "text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-full lg:w-2/3 text-black dark:text-white">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Ensuring your vehicle <br /> is in optimal condition
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Our process for mechanical repairs is designed to ensure transparency, quality, and customer satisfaction at every step. First, we check the vehicle in and conduct a thorough assessment of the damaged or worn parts. After identifying the necessary repairs, we confirm the pricing for both parts and labor with the customer. Once we receive approval, our skilled technicians carry out the required work using manufacturer-specified technical data to ensure precision, including tightening all bolts to the exact specifications. After completing the repairs, we perform a road test to verify the vehicle’s performance. Only when we are fully satisfied with the results do we return the vehicle to the customer, ensuring it’s in optimal condition.
                    </p>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>Expert Tip: </strong>
                            Regular maintenance is key to preventing mechanical issues.
                        </p>
                    </div>

                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li>DPF</li>
                        <li>EGR valve</li>
                        <li>Timing Chain</li>
                        <li>Clutches</li>
                        <li>We specialise on Jaguar Land Rover work</li>
                    </ol>

                    <h3 className="mb-4 mt-4">
                        We prioritise consulting with our clients on parts selection. While we always recommend using manufacturer-original replacements for optimal quality and performance, we’re happy to discuss aftermarket options to help reduce costs if preferred.
                    </h3>
                </main>
            </div>
        </div>
    );
};

export default MechanicalService;
