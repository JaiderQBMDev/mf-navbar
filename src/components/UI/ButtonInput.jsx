export default function ButtonInput({ className, children, onClick, backgroundColor, cursor }) {
    return (
        <button
            className={`px-6 py-4 rounded-2xl text-xs ${className} ${backgroundColor == true ? 'bg-[#CC5667] text-white hover:bg-[#cd6574]' : 'bg-gray-100 text-black hover:bg-gray-200'} ${cursor == true ? 'cursor-pointer' : ''} `}
            onClick={onClick}
        >
            {children}
        </button>
    );
}