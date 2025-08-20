import React from "react";
import { Link, useLocation } from "react-router-dom";

const BodyService = () => {
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
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Cost-effective solution <br /> for fixing minor damage
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Smart repair (Small to Medium Area Repair Technique) is a cost-effective solution for fixing minor damage to vehicles, such as scratches, dents, scuffs, and chips. This innovative method focuses on repairing only the affected area without the need for extensive replacement or repainting, saving time and money while maintaining the vehicle's original finish. Ideal for quick, high-quality results.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">OUR PROCESS</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Wash and clean:</strong> Wash the vehicle on arrival to assess the extent of damage</li>
                        <li><strong>Assessments:</strong> Our experienced technicians will assess the damaged area and work out a plan to get the best factory finish of the damaged area</li>
                        <li><strong>Damage masking:</strong> Mask off the damaged area to keep existing bodywork in same condition</li>
                        <li><strong>Handblock sanding:</strong> Perform initial sanding using a handblock in order to spot high and low spots on the repair area. Mark the deepest points in the damaged area in order to place welding points</li>
                        <li><strong>Dent pull:</strong> Remove paint/coating in the low points of the repair area, in preparation for dent pulling</li>
                        <li><strong>Spot weld:</strong> Spot weld onto the repair area using your preferred and recommended method and/or equipment</li>
                        <li><strong>Treatment check:</strong> If the dent does not completely remold after treatment, we use a body filler to make sure that the damaged area is smoothed out and has an even finish. Once the filler has taken 20 or 30 minutes to completely dry, the area where the dent occurs will be sanded down to create a smooth surface for the paint primer. The primer will help the paint adhere to the bumper.</li>
                        <li><strong>Contamination removal:</strong> The repair area for car paint must be clean and smooth to ensure proper paint adhesion. Your technician will thoroughly clean the damaged area to remove contaminants, then sand it with fine-grit sandpaper to smooth out any rust, old paint, or imperfections. Sometimes it’s even sanded down to the bare metal to ensure a smooth surface.</li>
                        <li><strong>Primer coating:</strong> Once the car is completely dry, one to three coats of primer will be applied to create a smooth base for the paint. This is an essential step—it provides adhesion for the paint, prevents rust and corrosion, and helps the paint color to appear true. Without primer, the paint may not stick properly and flake away.</li>
                        <li><strong>Basecoat:</strong> The first coat, or basecoat, provides the color of your car. It’s applied in multiple layers until the desired shade is reached.</li>
                        <li><strong>Mid coat:</strong> If your car has a metallic or pearl finish, a mid-coat will be applied after the base coat to give it depth and shine. This layer may also help to achieve a more accurate color match. However, not all paint jobs require a mid-coat.</li>
                        <li><strong>Final Layer:</strong> The final layer is the clearcoat, which adds well-needed protection to the paint. It’s responsible for giving your car that shiny, showroom finish</li>
                        <li><strong>Finishing Touches:</strong> After the paint has dried, the repaired car paint will be wet sanded and buffed to create a smooth, flawless finish. This process removes any imperfections and gives the paint a glossy appearance. Your technician may also apply a final layer of wax for added protection and shine.</li>
                    </ol>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl"><strong>Expert Tip:</strong> Regular waxing can protect your car's paint and keep it looking new.</p>
                    </div>

                    <div>
                        <p className="text-4xl mt-7 mb-6">WHY NIKITA ?</p>
                        <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                            <li><strong>Custom Colors:</strong> Choose from a wide range of colors or create a custom shade.</li>
                            <li><strong>Durability:</strong> Our paint jobs are designed to last.</li>
                        </ol>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BodyService;
