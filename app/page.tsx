'use client';
import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {

  const [isInstagram, setInstagram] = useState(true)
  const [isYoutube, setYoutube] = useState(true)
  const [isTiktok, setTiktok] = useState(true)
  const [isSnapchat, setSnapchat] = useState(true)

  return (
    <div>
      <Header />
      <div className='mt-10 md:mt-32 overflow-x-hidden text-xs md:text-md lg:text-lg'>
        <div className='bg-gray-200 px-4 md:px-20 pt-20 pb-10 m-auto w-full md:w-[60vw]'>
          <h1 className="text-2xl font-bold text-black mx-auto w-[40rem]">WANNA COLLAB WITH US? <br />LET US KNOW BELOW</h1>
          <div className=' mt-4 mx-auto'>
            <input className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0'  placeholder='Enter Your First Name *' type="text" /> <br /><br />
            <input className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0' placeholder='Enter Your Last Name *' type="text" /> <br /><br />
            <input className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0' placeholder='Enter Your Email Address *' type="text" /> <br /><br />
            <input className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='Enter Your Country *' type="text" /> <br /><br />
          </div>

          <div className='w-[40rem] text-black overflow-auto mx-auto'>
            <p className='py-2'>Which social platforms do you use the most? Check all that apply.</p>
            <div className='my-1'>
              <input type="checkbox" onChange={()=>{
                isInstagram ? setInstagram(false) : setInstagram(true)
              }} name="" id="" />
              <span> Instagram</span> <br />
              {!isInstagram && <div>
                <input className='border-[1.8px] px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='Instagram isername' type="text" />
                <input className='border-[1.8px] ml-2 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="text" />
              </div>}
            </div>
            <div className='my-1'>
              <input type="checkbox" onChange={()=>{
                isYoutube ? setYoutube(false) : setYoutube(true)
              }} name="" id="" />
              <span> YouTube</span> <br />
              {!isYoutube && <div>
                <input className='border-[1.8px] px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='youtube username' type="text" />
                <input className='border-[1.8px] ml-2 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of subscribers' type="text" />
              </div>}
            </div>
            <div className='my-1'>
              <input type="checkbox" onChange={()=>{
                isTiktok ? setTiktok(false) : setTiktok(true)
              }} name="" id="" />
              <span> TikTok</span> <br />
              {!isTiktok && <div>
                <input className='border-[1.8px] px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='tiktok username' type="text" />
                <input className='border-[1.8px] ml-2 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="text" />
              </div>}
            </div>
            <div className='my-1'>
              <input type="checkbox" onChange={()=>{
                isSnapchat ? setSnapchat(false) : setSnapchat(true)
              }} name="" id="" />
              <span> Snapchat</span>
              {!isSnapchat && <div>
                <input className='border-[1.8px] px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='snapchat username' type="text" />
                <input className='border-[1.8px] ml-2 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="text" />
              </div>}
            </div>
          </div>

          <div className='w-[40rem] text-black mx-auto'>
            <p className='py-2'>Which divisions would you like to represent? Check all that apply.</p>
            <div className='my-1'>
              <input type="checkbox" name="" id="" />
              <span> Women</span> <br />
            </div>
            <div className='my-1'>
              <input type="checkbox" name="" id="" />
              <span> Curve</span> <br />
            </div>
            <div className='my-1'>
              <input type="checkbox" name="" id="" />
              <span> Mens</span> <br />
            </div>
            <div className='my-1'>
              <input type="checkbox" name="" id="" />
              <span> Kids</span>
            </div>
            <div className='my-1 text-black'>
              <input type="checkbox" name="" id="" />
              <span> Beauty</span>
            </div>
          </div>

          <div className='w-[70vw] text-black mx-auto'>
            <textarea name="" className='lg:w-[50vw] md:w-[40vw] w-full h-48 m-auto p-2 border-[1.8px] placeholder:text-gray-500 placeholder:text-sm border-gray-500 bg-gray-100 outline-0' id="" placeholder='Tell us about yourself!'></textarea>
          </div>
          <div className="flex justify-center mt-6">
          <button className='bg-black hover:bg-white hover:text-black border border-black text-white uppercase px-6 py-2 mx-auto'>Submit</button>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  )
}
