export default function Header() {
    return (
        <div className="shadow-md fixed overflow-x-hidden bg-white z-[50] w-full top-0 left-0">
            <nav className="flex overflow-x-hidden">
                <div  className="uppercase text-xs items-center flex ml-16 mr-2 mt-4 md:m-6" >
                    <h1 className="text-lg md:text-4xl pb-2 md:pb-0 mr-4 md:mr-8 font-bold uppercase">Logo</h1>
                    <div className="md:flex hidden">
                        <a className=" text-gray-300 hover:text-black font-semibold p-1 md:p-2" href="#">Women</a>
                        <a className=" text-gray-300 hover:text-black font-semibold p-1 md:p-2" href="#">plus+curve</a>
                        <a className=" text-gray-300 hover:text-black font-semibold p-1 md:p-2" href="#">men</a>
                        <a className=" text-gray-300 hover:text-black font-semibold p-1 md:p-2" href="#">kids</a>
                        <a className=" text-gray-300 hover:text-black font-semibold p-1 md:p-2" href="#">beauty</a>
                    </div>
                    
                </div>
                <div className="md:ml-20 hidden md:block ml-10 mt-3 md:mt-6 w-[250px] md:w-[350px] pb-2">
                    <div className="flex items-center relative">

                    
                    <svg className='w-6 left-2 absolute' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                    <div className="hidden md:block w-full">
                       <input placeholder="Search..." className="border outline-0 px-8 py-1 md:py-1.5 w-full rounded-full bg-gray-200 " type="text" /> 
                    </div>
                    
                    <svg className='w-6 absolute right-2' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                    </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between w-[250px] ml-20 md:ml-32">
                    <svg className='w-6 md:hidden' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                    <svg className='w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    
                    <svg className='w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <svg className='w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                    </svg>
                    <svg className='w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                    </svg>
                </div>
            </nav>
            <div className="md:flex justify-around overflow-x-auto flex-nowrap text-[7px] lg:text-xs px-2 hidden -mt-2 pb-1 font-semibold ">
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">New In</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Nova Deals</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Swim</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Trending</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Clothing</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Sale</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Dresses</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Jeans</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Matching Sets</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Shoes</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Tops</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Bottoms</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Jackets & Sweaters</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Jumpsuits</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Lounge</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Accessories</a>
                <a className="px-2 py-1 hover:bg-gray-200 rounded" href="#">Activewear</a>
            </div>
        </div>
    )
}