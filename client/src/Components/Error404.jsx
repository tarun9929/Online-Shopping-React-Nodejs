import React, { useEffect } from 'react'

function Error404() {
    useEffect(() => {
        document.title = "Error 404 Not Found"
    })
    return (
        <>
            <div className='h-screen w-screen flex justify-center items-center flex-col gap-4'>
                <h1 className='text-9xl font-bold'>404</h1>
                <p className='text-2xl font-semibold'>Page Not Found</p>
            </div>
        </>
    )
}

export default Error404
