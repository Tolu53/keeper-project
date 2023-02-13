import React from 'react'

const Note = () => {
  return (
    <div>
        <div className='w-full h- bg-gray-300'>
            <div className='bg-gray-300 shadow-md w-60 rounded-md py-5 px-5 float-left my-5'>
                <h1 className='text-xl mb-1'> this is the note title</h1>
                <p className=''> this is the note content</p>
            </div>
        </div>
    </div>
  )
}

export default Note