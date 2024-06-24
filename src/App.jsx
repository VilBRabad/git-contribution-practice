import './App.css'

function App() {

  return (
    <>
      <div className="container h-screen w-screen px-20 bg-slate-900 text-white">
        <div className='h-14 flex justify-between items-center'>
          <p className='font-bold text-2xl'>Vilb.me</p>
          <ul className="flex gap-10 text-md">
            <li className='px-4 py-1 hover:bg-slate-800 cursor-pointer rounded-full transition'>Home</li>
            <li className='px-4 py-1 hover:bg-slate-800 cursor-pointer rounded-full transition'>About</li>
            <li className='px-4 py-1 hover:bg-slate-800 cursor-pointer rounded-full transition'>Project</li>
            <li className='px-4 py-1 hover:bg-slate-800 cursor-pointer rounded-full transition'>Contact Us</li>
          </ul>
        </div>
        <div className='h-[92%] flex items-center gap-6'>
          <div className='w-[50%]'>
            <p>Vilas Rabad</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur distinctio possimus! Sit exercitationem odio atque non corrupti voluptatibus molestiae maxime voluptates id, temporibus quis distinctio eligendi consequatur quidem saepe!</p>
            <button className='px-4 py-2 border rounded-full mt-4'>See my projects</button>
            <button className='px-4 py-2 bg-sky-900 rounded-full ml-2'>Hire me</button>
          </div>
          <div className='w-[50%]'>
            <img src="https://image.lexica.art/full_webp/9f8136dd-0fe5-4b22-b490-4c87e2722c5a" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
