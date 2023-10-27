import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-blue-900 h-screen w-screen flex items-center'>
      <div className='text-center w-full'>
        <button className='bg-white p-2'>Login with Google</button>
      </div>
    </div>
  )
}
