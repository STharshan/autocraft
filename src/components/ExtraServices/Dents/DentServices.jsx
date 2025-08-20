import React from "react";
import { Link, useLocation } from "react-router-dom";

const DentService = () => {
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
                        Restore Your Car’s <br /> Perfect Finish
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        At Nikita, we know how disheartening even the smallest dents can be. Our expert Dent Repair service is here to bring your car’s exterior back to perfection, restoring its sleek lines and flawless finish to make it look showroom-new once again.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">OUR PROCESS</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Wash and clean:</strong> Wash the vehicle on arrival to assess the extent of damage</li>
                        <li><strong>Assessments:</strong> Our experienced technicians will assess the damaged area and work out a plan to get the best factory finish</li>
                        <li><strong>Damage masking:</strong> Mask off the damaged area to keep existing bodywork in same condition</li>
                        <li><strong>Handblock sanding:</strong> Perform initial sanding using a handblock to spot high and low spots. Mark the deepest points to place welding points</li>
                        <li><strong>Dent pull:</strong> Remove paint/coating in the low points of the repair area, in preparation for dent pulling</li>
                        <li><strong>Spot weld:</strong> Spot weld onto the repair area using the recommended method/equipment</li>
                        <li><strong>Treatment check:</strong> If the dent does not completely remold, use body filler for smooth finish. Once dried, sand down for paint primer</li>
                        <li><strong>Contamination removal:</strong> Clean and sand the area to ensure proper paint adhesion. Remove rust, old paint, and imperfections. Sometimes down to bare metal</li>
                        <li><strong>Primer coating:</strong> Apply 1–3 coats of primer for adhesion, rust prevention, and true paint color</li>
                        <li><strong>Basecoat:</strong> Provides the color, applied in multiple layers until the desired shade is reached</li>
                        <li><strong>Mid coat:</strong> Applied for metallic or pearl finishes to enhance depth and color accuracy</li>
                        <li><strong>Final Layer:</strong> Clearcoat for protection and that glossy showroom finish</li>
                        <li><strong>Finishing Touches:</strong> Wet sanding and buffing removes imperfections. Wax may be applied for extra protection and shine</li>
                    </ol>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl"><strong>Quick Tip:</strong> Attend to dents early to prevent rust and further damage.</p>
                    </div>

                    <div>
                        <p className="text-4xl mt-7 mb-6 uppercase">Why Choose Nikita?</p>
                        <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                            <li><strong>Experienced Technicians:</strong> Our team has years of experience in dent repair.</li>
                            <li><strong>Satisfaction Guaranteed:</strong> We’re not satisfied until you are.</li>
                        </ol>
                    </div>

                    <p className="mt-10 mb-15">
                        Don’t let dents take away from your car’s stunning appearance. Stop by Nikita for professional dent repair today.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default DentService;
