import { useEffect } from 'react';
// Icons
import { IconNotificationHeader } from "../../assets/icons/customize/config";
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt } from "react-icons/fa";

// UI
import SearchInputElastic from '../UI/SearchInputElastic';
import ButtonInput from '../UI/ButtonInput';

export function Navbar({ sidebarToggle, setSidebarToggle }) {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && sidebarToggle) {
                setSidebarToggle(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarToggle, setSidebarToggle]);

    return (
        <nav className={`p-5 pr-8 flex justify-between items-center fixed z-10 duration-300 bg-white ${sidebarToggle ? 'left-80' : 'left-20'} right-0`}>
            <div className="flex items-center text-xl gap-x-8">
                <span
                    className="text-white font-semibold cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                    onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                    <FiMenu size={20} className='text-black' />
                </span>
                <p className='text-sm font-bold bg-[#77dd77] p-2 px-4 rounded-2xl text-white text-center content-center'>
                    Nueva Versión
                </p>
            </div>
            <SearchInputElastic
                type={'serch'}
                placeholder={'Afiliados...'}
                width={'xs'}
            />
            <div className='flex gap-x-3'>
                <ButtonInput
                    backgroundColor={true}
                    cursor={true}
                >
                    Vender
                </ButtonInput>

                <ButtonInput
                    backgroundColor={false}
                    cursor={true}
                >
                    Portal 80
                </ButtonInput>
                <ButtonInput
                    backgroundColor={false}
                    cursor={true}
                >
                    Bodytech Co
                </ButtonInput>
                <div className='flex ml-5 gap-x-4 items-center'>
                    <div className='p-2 rounded-full hover:bg-gray-100'>
                        <IconNotificationHeader />
                    </div>
                    <div className='p-3 rounded-full bg-[#FFE1E4] hover:bg-[#ffd8dc]'>
                        <FaUserAlt size={22}/>
                    </div>
                </div>
            </div>

        </nav>
    );
}