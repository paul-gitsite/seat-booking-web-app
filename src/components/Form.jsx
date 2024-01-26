import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';


const Form = () => {

    const { userName, setUserName, password, handlePassword, handleSubmit, messages, isStrong, show, setShow, handleKeyDown, passwordRef, popup, } = useContext(DataContext)

    return (
        !popup ? 
        (
            <div className="min-h-screen flex flex-col items-center justify-center ">
            <h1 className='m-10 text-xl' >Login Form</h1>
            <form className='backdrop-blur bg-slate-800 w-96 m-auto h-96 p-8 rounded-md shadow-md flex flex-col flex-nowrap justify-center 
                justify-items-center justify-self-stretch gap-6 content-around' >

                <input
                    className='text-black p-1 outline-none rounded-md '
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={userName}
                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    onChange={(e) => { setUserName(e.target.value) }}
                    required
                    autoComplete='Paul'
                />

                <span className='border border-white flex flex-row self-stretch w-30 text-black bg-white rounded-md  ' >
                    <input
                        className='flex-1 outline-none p-1  '
                        id='password'
                        name='password'
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
                        value={password}
                        ref={passwordRef}
                        onChange={(e) => handlePassword(e)}
                        required
                    />
                    {show ? (<FaRegEyeSlash className='text-slate-950 bg-white mx-2 my-2' onClick={() => setShow(!show)} aria-label="Hide Password" />
                    ) : (<FaRegEye className='text-slate-950 bg-white mx-2 my-2' onClick={() => setShow(!show)} aria-label="Show Password" />)}
                </span>
                <div>
                    {messages.map((message, index) => (
                        <p key={index} style={{ color: isStrong ? 'green' : 'red' }}>
                            {message}
                        </p>
                    ))}
                </div>
                <button className='border border-white w-20 h-8 mx-auto rounded-md hover:bg-white hover:text-slate-900 hover:font-bold' onClick={handleSubmit} type='submit' >Login</button>
            </form>
        </div>
        )

        : null
        
    )
}

export default Form