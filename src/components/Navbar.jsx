import { FiMenu } from 'react-icons/fi';
import SearchInputElastic  from './SearchInputElastic';
export function Navbar({ sidebarToggle, setSidebarToggle }) {
    return (
        <nav className={`bg-white p-5 flex fixed w-full z-10 duration-300 ${sidebarToggle ? 'ml-80' : 'ml-20'} gap-x-8`}>
            <div className="flex items-center text-xl">
                <span
                    className="text-white font-semibold cursor-pointer"
                    onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                    <FiMenu size={20} className='text-black' /> 
                </span>
            </div>
            <div className="flex justify-center">
                <p className='text-sm font-bold bg-[#77dd77] p-2 px-4 rounded-2xl text-white'>
                    Nueva Versión
                </p>
            </div>
            <SearchInputElastic />
        </nav>
    );
}