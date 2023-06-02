'use client';
import Header from '../components/header'
import Footer from '../components/footer'
import Toast from '../components/toast'
import { use, useState } from 'react'

export default function Home() {

  const [fname, setfName] = useState('')
  const [lname, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [about, setAbout] = useState('')

  const [ig, setIg] = useState('')
  const [igUname, setIgUname] = useState('')
  const [igFollower, setIgFollower] = useState('')

  const [yt, setYt] = useState('')
  const [ytUname, setYtUname] = useState('')
  const [ytSub, setYtSub] = useState('')

  const [tik, setTik] = useState('')
  const [tikUname, setTikUname] = useState('')
  const [tikFollower, setTikFollower] = useState('')

  const [snap, setSnap] = useState('')
  const [snapUname, setTSnapUname] = useState('')
  const [snapFollower, setSnapFollower] = useState('')

  const [women, setWomen] = useState('')
  const [curve, setCurve] = useState('')
  const [mens, setMen] = useState('')
  const [kids, setKids] = useState('')
  const [beauty, setBeauty] = useState('')

  const [isInstagram, setInstagram] = useState(true)
  const [isYoutube, setYoutube] = useState(true)
  const [isTiktok, setTiktok] = useState(true)
  const [isSnapchat, setSnapchat] = useState(true);

  const [fNameMsg, setfNameMsg] = useState(false);
  const [lNameMsg, setlNameMsg] = useState(false);
  const [emailMsg, setemailMsg] = useState(false);
  const [countryMsg, setcountryMsg] = useState(false);
  const [aboutMsg, setaboutMsg] = useState(false);

  const [pending, setPending] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if(!fname){
      setfNameMsg(true)
    } if(!lname){
      setlNameMsg(true)
    } if(!email){
      setemailMsg(true)
    } if(!country){
      setcountryMsg(true)
    } if(!about){
      setaboutMsg(true)
    } if(fname){
      setfNameMsg(false)
    } if(lname){
      setlNameMsg(false)
    } if(email){
      setemailMsg(false)
    } if(country){
      setcountryMsg(false)
    } if(about.length > 0){
      setaboutMsg(false)
    }
  
    if(fname && lname && email && country && about){
      setPending(true);
      setLoading(true);
      const data = { 
        fname, lname, email, country, ig,
        igUname, igFollower, yt, ytUname,
        ytSub, tik, tikUname, tikFollower,
        snap, snapUname, snapFollower, women, curve, mens, kids, beauty, about     
       };
        const respones = await fetch('http://localhost:5000/add-user', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        const res = await respones.json()
        // console.log(res);
        setfName('')
        setlName('')
        setEmail('')
        setCountry('')
        setAbout('')
        setTimeout(()=>{
          setLoading(false);
          setSuccess(true);
        },3000);
        setTimeout(()=>{
          setPending(false);
          setSuccess(false);
        },5000);
    }
  }

  return (
    <div>
      <Header />
      <div className='mt-10 md:mt-32 overflow-x-hidden text-xs md:text-md lg:text-lg'>
        <div className='bg-gray-200 px-4 md:px-20 pt-20 pb-10 m-auto w-full md:w-[60vw]'>
          <h1 className="text-2xl font-bold text-black mx-auto w-[40rem]">WANNA COLLAB WITH US? <br />LET US KNOW BELOW</h1>
          <div className=' mt-4 mx-auto'>

            <input
            onChange={e=> setfName(e.target.value)}
            className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0'  placeholder='Enter Your First Name *' type="text" />
            {fNameMsg && <small className='text-xs pt-2 text-red-700'>* This field is required</small>} <br /><br />

            <input
            onChange={e=> setlName(e.target.value)}
             className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0' placeholder='Enter Your Last Name *' type="text" />
            {lNameMsg && <small className='text-xs pt-2 text-red-700'>* This field is required</small>} <br /><br />

            <input
            onChange={e=> {
              if(e.target.value.includes('.com') && e.target.value.includes('@')){
                setEmail(e.target.value)
                setemailMsg(false)
              } else {
                setemailMsg(true)
              }
              
            }}
             className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500  bg-gray-100 outline-0' placeholder='Enter Your Email Address *' type="text" />
            {emailMsg && <small className='text-xs pt-2 text-red-700'>* This field is required and must contain '@' & '.com'</small>} <br /><br />

            <input
            onChange={e=> setCountry(e.target.value)}
             className='w-full text-black mx-auto p-2 border-[1.8px] placeholder:text-black placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='Enter Your Country *' type="text" />
            {countryMsg && <small className='text-xs pt-2 text-red-700'>* This field is required</small>} <br /><br />
          </div>

          <div className='w-full text-black overflow-auto mx-auto'>
            <p className='py-2'>Which social platforms do you use the most? Check all that apply.</p>

            <div className='my-1'>
              <input type="checkbox" onChange={e=>{
                isInstagram ? setInstagram(false) : setInstagram(true)
                e.target.checked === true ? setIg('Yes') : setIg('')
              }} name="" id="" />
              <span> Instagram</span> <br />

              {!isInstagram && <div>
                <input
                onChange={e=> setIgUname(e.target.value)}
                className='border-[1.8px] w-[45%] ml-4 px-2 placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='Instagram username' type="text" />

                <input
                onChange={e=> setIgFollower(e.target.value)}
                 className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="number" />
              </div>}
            </div>

            <div className='my-1'>
              <input type="checkbox" onChange={e=>{
                isYoutube ? setYoutube(false) : setYoutube(true)
                e.target.checked === true ? setYt('Yes') : setYt('')
              }} name="" id="" />
              <span> YouTube</span> <br />

              {!isYoutube && <div>
                <input
                onChange={e=> setYtUname(e.target.value)}
                  className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='youtube username' type="text" />

                <input
                onChange={e=> setYtSub(e.target.value)}
                   className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of subscribers' type="number" />
              </div>}
            </div>

            <div className='my-1'>
              <input type="checkbox" onChange={e=>{
                isTiktok ? setTiktok(false) : setTiktok(true);
                e.target.checked === true ? setTik('Yes') : setTik('')
              }} name="" id="" />
              <span> TikTok</span> <br />

              {!isTiktok && <div>
                <input
                onChange={e=> setTikUname(e.target.value)}
                   className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='tiktok username' type="text" />

                <input
                onChange={e=> setTikFollower(e.target.value)}
                   className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="number" />
              </div>}
            </div>

            <div className='my-1'>
              <input type="checkbox" onChange={e=>{
                isSnapchat ? setSnapchat(false) : setSnapchat(true)
                e.target.checked === true ? setSnap('Yes') : setSnap('')
              }} name="" id="" />
              <span> Snapchat</span>

              {!isSnapchat && <div>
                <input
                onChange={e=> setTSnapUname(e.target.value)}
                   className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='snapchat username' type="text" />

                <input
                onChange={e=> setSnapFollower(e.target.value)}
                 className='border-[1.8px] w-[45%] ml-4 px-2  placeholder:text-xs border-gray-500 bg-gray-100 outline-0' placeholder='# of followers' type="number" />
              </div>}
            </div>
          </div>

          <div className='w-full text-black mx-auto'>
            <p className='py-2'>Which divisions would you like to represent? Check all that apply.</p>
            <div className='my-1'>
              <input onChange={e=>{
                e.target.checked === true ? setWomen('Women') : setWomen('')
              }} type="checkbox" name="" id="" />
              <span> Women</span> <br />
            </div>

            <div className='my-1'>
              <input onChange={e=>{
                e.target.checked === true ? setCurve('Curve') : setCurve('')
              }} type="checkbox" name="" id="" />
              <span> Curve</span> <br />
            </div>

            <div className='my-1'>
              <input onChange={e=>{
                e.target.checked === true ? setMen('Men') : setMen('')
              }} type="checkbox" name="" id="" />
              <span> Mens</span> <br />
            </div>
            <div className='my-1'>
              <input onChange={e=>{
                e.target.checked === true ? setKids('Kids') : setKids('')
              }} type="checkbox" name="" id="" />
              <span> Kids</span>
            </div>
            <div className='my-1 text-black'>
              <input onChange={e=>{
                e.target.checked === true ? setBeauty('Beauty') : setBeauty('')
              }} type="checkbox" name="" id="" />
              <span> Beauty</span>
            </div>
          </div>

          <div className='md:w-[70vw] w-full mx-auto'>
            <textarea
                onChange={e=> {setAbout(e.target.value)
                }}
                name="" className='lg:w-[50vw] text-black md:w-[40vw] w-full h-48 m-auto p-2 border-[1.8px] placeholder:text-gray-500 placeholder:text-sm border-gray-500 bg-gray-100 outline-0' id="" placeholder='Tell us about yourself!'></textarea>
            {aboutMsg && <small className='text-xs block text-red-700'>* This field is required</small>}
          </div>
          <div className="flex justify-center mt-6">
          <button onClick={handleSubmit} className='bg-black hover:bg-gray-400 hover:text-black border border-black text-white uppercase px-6 py-2 mx-auto'>Submit</button>
          </div>
          
        </div>
      </div>

      {/* Toast */}
      <>
        { pending && <div className=" w-48 h-20 bg-gray-500 rounded-lg border-b-4 border-gray-900 top-80 fixed opacity-90 z-50 left-32 sm:left-[15rem] md:left-[24rem] lg:left-[35rem]">
          <div className="relative h-full">
            { loading && <div>
              <div className="ml-3 mt-1 h-7 w-7 absolute left-16 top-4 border-t-gray-900 animate-spin border-2 border-white rounded-full"></div>
              <p className='absolute text-white left-16 bottom-2 text-xs'>Loading...</p>
            </div> }
             
                {success && <p className="absolute left-8 top-8 text-xs text-white">Submited Succesfully!!</p>}
            </div>
          </div>
               }
      </>
      <Footer />
    </div>
  )
}
