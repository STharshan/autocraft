import React from "react";
import { Link, useLocation } from "react-router-dom";

const MOTService = () => {
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
                    <h2 className="text-base font-medium text-gray-500 dark:text-gray-300 uppercase mb-4 lg:-ml-10">Browse Services</h2>
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
                        MOT (Ministry of <br /> Transport) Test
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        At Nikita Autocraft, we make your MOT test simple and stress-free. Our certified technicians conduct a comprehensive inspection of your vehicle to ensure it meets all safety and environmental standards, giving you confidence on the road. With fast turnaround times, transparent pricing, and a dedication to quality, we ensure your car is ready to pass with ease. Trust us to keep you and your vehicle safe—book your MOT with us today!
                    </p>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>Expert Tip: </strong>
                            Boost your chances of passing the MOT by performing a pre-test inspection.
                        </p>
                    </div>

                    <h3 className="mb-4">Some items that will be tested in an MOT test</h3>
                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li>Lamps, reflectors, and electrical equipment</li>
                        <li>Tyres and road wheels</li>
                        <li>Seat belts</li>
                        <li>Body, structure, and general items</li>
                        <li>Exhaust, fuel, and emissions</li>
                        <li>Driver's view of the road</li>
                        <li>Steering</li>
                        <li>Windscreen</li>
                        <li>Bonnet catch</li>
                        <li>Horn</li>
                    </ol>

                    <h3 className="mt-5">
                        You are welcome to observe the MOT test from our designated viewing area; however, we kindly ask that you refrain from interrupting the tester during the process.
                    </h3>
                </main>
            </div>
        </div>
    );
};

export default MOTService;
