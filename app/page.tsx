import React from 'react'

function HomePage() {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen px-2'>
        <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
        <div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* sun icon */}
                    <h2>Examples</h2>
                </div>
                <div className='space-y-2'>
                   <p className='InfoText'>"Explain Something to me</p>
                   <p className='InfoText'>"What is the difference between a dog and a cat?"</p>
                   <p className='InfoText'>"What is the color of the sun?"</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage