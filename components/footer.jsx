export default function Footer(){
    return (
        <div className="bg-gray-900 pt-10 px-10 items-start block md:grid grid-cols-4  text-xs text-white w-full h-full md:h-48">
            <div className="text-center">
                <p className="font-bold uppercase">shop faster with the app</p>
                <div>

                </div>
            </div>
            <div className="flex my-4 md:my-0 justify-around col-span-2">
                <div className="">
                    <p className="font-bold pb-1 uppercase">Get help</p>
                    <p className="font-light py-1 hover:text-white"><a href="#">Help Center</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Track Order</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Shiping Info</a></p>
                    <p className="text-gray-100 py-1 hover:text-white" ><a href="#">Returns</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Contact Us</a></p>
                </div>
                <div className="">
                    <p className="font-bold pb-1 uppercase">comany</p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Careers</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">About</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Stores</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Want to Collab?</a></p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Contact Us</a></p>
                </div>
                <div className="">
                    <p className="font-bold pb-1 uppercase">Quick Links</p>
                    <p className="text-gray-100 py-1 hover:text-white"><a href="#">Size Guide</a></p>
                    <p  className="text-gray-100 py-1 hover:text-white"><a href="#">Sitemap</a></p>
                    <p  className="text-gray-100 py-1 hover:text-white"><a href="#">Gift Cards</a></p>
                    <p  className="text-gray-100 py-1 hover:text-white"><a href="#">Check Gift Card Balance</a></p>
                    <p  className="text-gray-100 py-1 hover:text-white"><a href="#">Contact Us</a></p>
                </div>
                
            </div>
            <div className="text-center">
            <p className="font-bold uppercase">Sign up for discount + updates</p>
            </div>
        </div>
    )
}