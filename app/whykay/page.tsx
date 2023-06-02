'use client';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react';

export default function Whykay(){

    const [pending, setPending] = useState(true)
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([
        {fname: '', lname: '', email: '', country: '', igUname: '', igFollower: '', snapUname: '', snapFollower: '', curve: '', mens: '', women: '', kids: '', beauty: '', about: '', tikUname: '', tikFollower: '', ytUname: '', ytSub: ''}
    ])
    useEffect(()=>{
        setPending(true);
        setLoading(true);
        fetch('http://localhost:5000/loadrec')
        .then(response => response.json())
    // console.log(data);
        .then(data => {
            setTimeout(()=>{
                setLoading(false);
                setData(data);
                setPending(false);
            },3000);
        })
    }, [])
    return (
        <>
        <Header />
        <div className='mt-10 md:mt-32 overflow-x-auto text-[10px]'>
            <div className='px-4 pt-6 pb-10 m-auto w-full'>
            {data && <table className='mx-auto'>
                <thead>
                    <tr>
                    <th className='font-semibold border border-gray-700 px-2'>Name</th>
                    <th className='font-semibold border border-gray-700 px-2'>Email</th>
                    <th className='font-semibold border border-gray-700 px-2'>Country</th>
                    <th className='font-semibold border border-gray-700 px-2'>IG </th>
                    <th className='font-semibold border border-gray-700 px-2'>IG Followers</th>
                    <th className='font-semibold border border-gray-700 px-2'>YouTube </th>
                    <th className='font-semibold border border-gray-700 px-2'>YouTube Sub</th>
                    <th className='font-semibold border border-gray-700 px-2'>TikTok </th>
                    <th className='font-semibold border border-gray-700 px-2'>TikTok Followers</th>
                    <th className='font-semibold border border-gray-700 px-2'>Snapchat </th>
                    <th className='font-semibold border border-gray-700 px-2'>Snap Followers</th>
                    <th className='font-semibold border border-gray-700 px-2'>Division rep</th>
                    <th className='font-semibold border border-gray-700 px-2'>About</th>
                    </tr>
                </thead>
                
                {data.map((info, index) => (
                <tbody key={index}>
                    <tr className={`${index % 2 == 0 ? 'bg-gray-300' : ''}`}>
                    <td className='border border-gray-700 py-1 px-2'>{info.fname} {info.lname}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.email}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.country}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.igUname}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.igFollower}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.ytUname}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.ytSub}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.tikUname}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.tikFollower}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.snapUname}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.snapFollower}</td>
                    <td className='border border-gray-700 py-1 px-2'>
                        {info.curve? info.curve + ',' : ''} {info.mens ? info.mens + ',' : ''} {info.women ? info.women + ',' : ''} {info.kids ? info.kids + ',' : ''} {info.beauty ? info.beauty + ',' : ''}</td>
                    <td className='border border-gray-700 py-1 px-2'>{info.about}</td>
                    </tr>
                </tbody>))}
                </table> }
            
            </div>
        </div>

        {/* Toast */}
      <>
        { pending && <div className=" w-48 h-20 bg-gray-500 rounded-lg border-b-4 border-gray-900 top-48 fixed opacity-90 z-50 left-32 sm:left-[15rem] md:left-[24rem] lg:left-[35rem]">
          <div className="relative h-full">
            { loading && <div>
              <div className="ml-3 mt-1 h-7 w-7 absolute left-16 top-4 border-t-gray-900 animate-spin border-2 border-white rounded-full"></div>
              <p className='absolute text-white left-16 bottom-2 text-xs'>Loading...</p>
            </div> }
            </div>
          </div>
        }
      </>
        <Footer />
        </>
    )
}