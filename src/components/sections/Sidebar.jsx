import { LogMTBM, IconConfig } from "../../assets/icons/customize/config";
import { dataMenu } from "../../root.helper";

const version = {
    number: '3.1.14'
}

export function Sidebar({ user,permissions, sidebarToggle }) {
    console.log("Estos son los permisos que llegan" ,permissions);
    const filteredMenu = dataMenu.filter((item) => 
        item.isPublic || permissions.includes(item.permissions)
    );

    console.log(filteredMenu);
    return (
        <div className={`flex flex-col duration-300 ${sidebarToggle ? "w-80" : "w-20"} h-screen bg-white`}>            
            <div className="flex items-center gap-x-4 p-5 bg-white w-full">
                <LogMTBM
                    className={`cursor-pointer duration-500 ${sidebarToggle && "rotate-180"} text-9xl`}
                />
                <p className={`text-black origin-left font-medium text-2xl font-light duration-500 ${!sidebarToggle && "hidden"}`}>
                    <strong className="text-xl font-black">MYBT</strong> comercial
                </p>
            </div>

            <div className="flex-1 overflow-y-auto mt-2" style={{ scrollbarWidth: "none" }}>
                <ul>
                    {filteredMenu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="flex items-center text-sm py-3 px-6 hover:bg-gray-100 duration-300 cursor-pointer border-r-2 border-transparent focus:border-red-900"
                                title={item.name}
                            >
                                <span className="min-w-[24px] text-[20px] flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className={`mx-4 font-medium duration-500 font-thin ${!sidebarToggle && "hidden"}`}>
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="px-6 text-xs font-thin text-center">
                Versión: {version.number}
            </p>
            <a 
                href="/config"
                className="flex items-center text-sm py-3 px-6 hover:bg-gray-100 duration-300 cursor-pointer border-r-2 border-transparent focus:border-red-900 bg-white w-full"
            >
                <span className="min-w-[24px] text-[20px] flex items-center justify-center">
                    <IconConfig/>
                </span>
                <span className={`mx-4 font-medium duration-500 font-thin ${!sidebarToggle && "hidden"}`}>
                    Configuración
                </span>
            </a>
        </div>
    );
}
