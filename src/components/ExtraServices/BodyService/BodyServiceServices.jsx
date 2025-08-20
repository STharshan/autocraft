import React from "react";
import { Link, useLocation } from "react-router-dom";

const BodyServiceServices = () => {
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
                        Dependable and <br /> thorough car servicing
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Ensure your car stays in top shape with our dependable and thorough car servicing. At Nikita Autocraft, we do more than just routine maintenance—our skilled technicians utilise premium parts and advanced tools to keep your vehicle performing at its best. Whether it’s enhancing efficiency or avoiding expensive repairs, we’re dedicated to maintaining your car’s reliability and your peace of mind. Count on us to provide expert care customised to your vehicle’s requirements—book your service today!
                    </p>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>Pro Tip: </strong>
                            Regular maintenance prevents breakdowns, prolongs your car's lifespan, and keeps it running at peak performance, helping you avoid expensive repairs in the future.
                        </p>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Why Nikita Tuning?</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Proven Results:</strong> Experience noticeable improvements.</li>
                        <li><strong>Safe and Reliable:</strong> All modifications are done with safety in mind.</li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default BodyServiceServices;
