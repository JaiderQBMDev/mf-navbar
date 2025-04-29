
export default function SearchInputElastic({ type, placeholder, width}) {
    return (
        <>
            <input type={type} placeholder={placeholder} className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-${width}`} />
        </>
    )
}