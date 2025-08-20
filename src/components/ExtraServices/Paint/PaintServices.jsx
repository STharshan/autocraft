import React from "react";
import { Link, useLocation } from "react-router-dom";

const Paint = () => {
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
        <section className="bg-white dark:bg-black">
            <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-16 py-30 gap-8 w-full max-w-screen-xl mx-auto transition-colors duration-300">
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
                                    className={`block pl-2 transition-all duration-150 ${location.pathname === item.path
                                            ? "font-semibold border-l-4 border-yellow-500 text-black dark:text-yellow-400 dark:border-yellow-400"
                                            : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-yellow-300"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-full lg:w-2/3 text-gray-800 dark:text-gray-100">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                        RESTORE YOUR VEHICLE <br /> TO ITS ORIGINAL BEAUTY
                    </h1>

                    <p className="mb-6 text-sm lg:text-base text-gray-700 dark:text-gray-300">
                        At Nikita Autocraft, we pride ourselves on delivering the highest quality paint services for cars, including full resprays, to restore your vehicle to its original beauty. Our team of skilled technicians uses state-of-the-art equipment and premium materials to ensure a flawless finish every time. Whether it's a minor touch-up or a complete respray, we take the time to thoroughly prep and prime your vehicle, ensuring superior paint adhesion and a smooth, long-lasting result. Our attention to detail, combined with our expertise in color matching and advanced finishing techniques, guarantees that your car will not only look stunning but also maintain its value and durability. Trust Nikita Autocraft for all your paint and respray needs, and experience exceptional quality and service.
                    </p>

                    <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mb-6 dark:bg-black">
                        <p className="text-2xl">
                            <strong>Tony's Advice: </strong>
                            To maintain your car's paint and keep it looking like new, regularly wash your
                            vehicle and apply a layer of wax every 3-6 months. Waxing provides a protective barrier against contaminants,
                            UV rays, and weather elements, preventing the paint from fading or getting damaged. Additionally, avoid washing
                            your car in direct sunlight or using abrasive materials, as this can cause scratches and swirl marks. Regular
                            care and protection will help preserve the paint’s shine and extend its lifespan.
                        </p>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                        OUR PROCESS
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base text-gray-700 dark:text-gray-200">
                        <li>Upon arrival, the vehicle is thoroughly washed to evaluate the extent of the damage, ensuring a clear view of the repair area.</li>
                        <li>Our skilled technicians carefully inspect the damaged section and devise a detailed plan to restore it to a factory-quality finish</li>
                        <li>The damaged area is expertly masked off to protect the surrounding bodywork, ensuring it remains in pristine condition throughout the repair process.</li>
                        <li>To guarantee proper paint adhesion, the repair area is meticulously cleaned and smoothed. Our technicians remove any contaminants, sand the surface with fine-grit sandpaper, and, if necessary, strip it down to bare metal to ensure a flawless base.</li>
                        <li>Once the area is fully dry, one to three coats of primer are applied to create a smooth, stable foundation for the paint. This crucial step enhances adhesion, prevents rust, and ensures the paint color appears true to its shade.</li>
                        <li>The basecoat is applied in multiple layers to achieve the perfect color match, providing your vehicle with its distinctive hue.</li>
                        <li>For cars with a metallic or pearl finish, a mid-coat is added after the basecoat to enhance depth and shine, and to ensure a more precise color match. Not all paint jobs require this additional layer.</li>
                        <li>The final touch is the clearcoat, which adds a protective layer to the paint, ensuring durability and delivering that glossy, showroom-like finish.</li>
                        <li>After the paint has fully cured, the repaired area is wet-sanded and buffed to remove any imperfections, creating a smooth, flawless surface. A final layer of wax may be applied to provide extra protection and enhance the shine.</li>
                    </ol>
                </main>
            </div>
        </section>
    );
};

export default Paint;
