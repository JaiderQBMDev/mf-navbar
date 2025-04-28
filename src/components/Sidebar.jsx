import { LogMTBM } from "../assets/icons/customize/config";
import { dataMenu } from "../root.helper";

export function Sidebar({ sidebarToggle }) {
    return (
        <div className={`flex flex-col duration-300 ${sidebarToggle ? "w-80" : "w-20"} h-screen relative`}>
            <div className="flex items-center gap-x-4 py-5 px-7">
                <LogMTBM
                    className={`cursor-pointer duration-500 ${sidebarToggle && "rotate-180"}`}
                />
                <p className={`text-black origin-left font-medium text-2xl font-light duration-500 ${!sidebarToggle && "hidden"}`}>
                    <strong className="text-xl font-black">MYBT</strong> comercial
                </p>
            </div>

            <ul className="pt-6 px-2">
                <li>
                    {dataMenu.map((item, index) => (
                        <>
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center text-sm py-3 px-6 hover:bg-gray-100 duration-300 cursor-pointer"
                            >
                                {item.icon}
                                <span className={`mx-4 font-medium duration-500 font-thin ${!sidebarToggle && "hidden"}`}>{item.name}</span>
                            </a>
                        </>
                    ))
                    }
                </li>
            </ul>
        </div>
    );
}
