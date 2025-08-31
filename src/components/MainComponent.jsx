import React, { useContext } from 'react'
import { FaUserCircle, FaCompass, FaLightbulb, FaMicrophone } from "react-icons/fa";
import { FaCircleUser, FaCode, FaMessage } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import { MdAddPhotoAlternate } from "react-icons/md";
import { Context } from '../context/Context';



const MainComponent = () => {
    const {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
    } = useContext(Context)

    return (
        <div className='flex-1 min-h-screen pb-[15vh] relative'>
            <div className="flex items-center justify-between text-2xl p-5 text-slate-700">
                <p>Gemini</p>
                <FaUserCircle />

            </div>
            <div className="max-w-[900px] mx-auto">

                {!showResult ? 
                <>
                <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
                    <p><span className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent '>Hello, Satyarth.</span></p>
                    <p className='text-slate-400'>How can I  help you today?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                        <p className="text-slate-700 text-lg">
                            Suggest top 10 web series.
                        </p>
                        <FaCompass className='text-4xl p-1 absolute bottom-2 right-2' />
                    </div>

                    <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                        <p className="text-slate-700 text-lg">
                            What is loop in Javascript?
                        </p>
                        <FaLightbulb className='text-4xl p-1 absolute bottom-2 right-2' />
                    </div>

                    <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                        <p className="text-slate-700 text-lg">
                            Who is known as the "Mother of Dragons"?
                        </p>
                        <FaMessage className='text-4xl p-1 absolute bottom-2 right-2' />
                    </div>

                    <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                        <p className="text-slate-700 text-lg">
                            Who sits on the Iron throne at end of the series?
                        </p>
                        <FaCode className='text-4xl p-1 absolute bottom-2 right-2' />
                    </div>

                </div>
                </> : <div className='py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide'> 
                    <div className="my-10 mx-0 flex items-center gap-5">
                        <FaCircleUser className='text-3xl'/>
                        <p className='text-lg font-[400] leading-[1.8]'>{recentPrompt}</p>
                    </div>

                    <div className="flex items-start  gap-5">
                        <img src="/gemini-icon.png" className='w-[2rem] rounded-[50%]' />

                        {
                            loading ? (<div className='w-full flex flex-col gap-2'>
                                <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-fade-in-scale' />
                                <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-fade-in-scale' />
                                <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-fade-in-scale' />
                            </div>) : <p dangerouslySetInnerHTML={{__html:resultData}} className='text-lg font-[400] leading-[1.8]'></p>
                        }

                        
                    </div>
                    
                    </div>}

                

                <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
                    <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
                        <input
                            type="text" placeholder='Enter a prompt here...'
                            className='flex-1 bg-transparent border-none outline-none p-2 text-lg'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="flex gap-4 items-center">
                            <MdAddPhotoAlternate className='text-2xl cursor-pointer' />
                            <FaMicrophone className='text-2xl cursor-pointer' />
                            <IoSend
                                onClick={() => onSent()}
                                className='text-2xl cursor-pointer'
                            />
                        </div>
                    </div>

                    <p className='text-sm my-4 mx-auto text-center font-[500px] text-slate-500'>Gemini may display accurate info, including about people, so doule check its responses.</p>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
