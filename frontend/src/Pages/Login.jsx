import backgroundImage from '../assets/bg-brics.jpg';
import porks_logo from '../assets/logo-porks.jpg';

function Login() {
  return(
   <div
     className="pt-32 bg-cover bg-center h-screen"
     style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',  
      backgroundPosition: 'center top' 
    }}
   >
    <div className='w-64 h-[500px] bg-[#000000] rounded-lg shadow-black shadow-lg ml-auto mr-auto'>
      <img className='mr-auto ml-auto w-48' src={porks_logo} alt="logo_porks" />
      <div className='text-center font-roboto text-4xl pt-8 text-yellow-300 text-shadow'>PORKS</div>
      <h2 className='text-center mr-auto font-roboto text-red-600 mt-2'>Porco & Chope</h2>

      <div className='bg-black w-48 mr-auto ml-auto mt-8'>
        <input type="text" placeholder='Usuario' className='text-bold mb-1 text-center w-48' />
        <input type="password" placeholder='Senha' className='text-bold text-center w-48' />
      </div>
      <div className='w-ful mt-4 text-center'>
        <input type="button" value="ENTRAR" className='active:shadow-none shadow-md shadow-gray-500 font-bold w-24 ml-auto mr-auto bg-red-600 border border-black' />
      </div>
    </div>
   </div>
  );
}

export default Login;