import './global.css'
const Login=()=>{
    return (
       <div className='h-screen flex item-center'>
           <div className='w-half mx-auto'>
            <h2>Login</h2>
            <div className='mb3'>
                <input className='w-full pt2 pb2' type="text" placeholder="EMP-CODE:"/>
            </div>
            <div className='mb3'>
                <input className='w-full pt2 pb2' type="email" placeholder="EMP-Email:"/>
            </div>
            <div className='mb3'>
                <input className='w-full pt2 pb2' type="mobile" placeholder="EMP-Mobile:"/>
            </div>
            <div className='flex justify-center'>
               <button className='mx-auto'>Login</button>
            </div>
        </div>
       </div>
    )
}

export default Login