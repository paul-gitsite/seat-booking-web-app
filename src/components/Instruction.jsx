import React from 'react'

const Instruction = () => {
    return (
        <div className='flex flex-row p-4 justify-evenly' >
            <span>
                <p>Vacant</p>
                <canvas className='bg-white rounded-md ' width='20' height="20" ></canvas>
            </span>
            <span>
                <p>Select</p>
                <canvas className='bg-green-600 rounded-md' width='20' height="20" ></canvas>
            </span>
            <span>
                <p>Already selected</p>
                <canvas className='bg-red-600 rounded-md ' width='20' height="20" ></canvas>
            </span>
        </div>
    )
}

export default Instruction