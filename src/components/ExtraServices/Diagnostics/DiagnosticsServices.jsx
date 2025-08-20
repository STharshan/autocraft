import React from "react";
import { Link, useLocation } from "react-router-dom";

const DiagnosticsService = () => {
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
                        Consultive Diagnostics
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        At Nikita, we do more than just connect to a diagnostic machine and hand you a bill. We take the time to consult with you, identify what truly needs attention, and address the root cause of the issue for a lasting solution.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">OUR PROCESS</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                        <li>Customer experience</li>
                        <li>Before we plug in the machines, we take the time to understand what you are experiencing</li>
                        <li>Machine and Technician test</li>
                        <li>Vehicle diagnostics analyse onboard computer data to identify potential issues using tools like OBD-II scanners.</li>
                        <li>Fault codes (DTCs) indicate specific problems and guide technicians in troubleshooting and repairs.</li>
                        <li>Modern vehicles use sensors and the ECU to monitor and report discrepancies via fault codes.</li>
                        <li>Regular diagnostics help in early detection of issues, enhancing safety and vehicle efficiency.</li>
                        <li>Diagnostic reports include DTCs, real-time data, and technician recommendations for necessary repairs.</li>
                        <li>Road Test</li>
                        <li>Verify the fault exists by road testing the vehicle, visually inspecting it, or performing basic tests. Run further tests to confirm or refute each theory.</li>
                        <li>Repair and Confirm</li>
                        <li>Once we confirm the theory we will get to work and fix all problems. Road test again and when satisfied that it’s fixed the problem, we will return the vehicle.</li>
                    </ol>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>Pro Tip: </strong>
                            Regular diagnostic checks can save you time and money by catching potential issues early.
                        </p>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">WHY CHOOSE NIKITA?</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Attention to Detail:</strong> Every nook and cranny is meticulously checked</li>
                        <li><strong>Consultive:</strong> We’ll provide you with expert recommendations on what requires immediate attention while also outlining timelines and potential areas to monitor, empowering you to plan confidently for your vehicle’s care.</li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default DiagnosticsService;
