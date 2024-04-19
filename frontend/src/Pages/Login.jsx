import backgroundImage from '../assets/bg-brics.jpg';
import porks_logo from '../assets/logo-porks.jpg';
import appContext from '../context/appContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const { setUsername, setPassword, username, password } = useContext(appContext);
  const history = useNavigate();

  const handleChange = ({target}) => {
    if (target.name === "username") setUsername(target.value);
    else setPassword(target.value)
  }

  const clickLogin = () => {
    Axios.post('http://localhost:3001/login', {
      username,
      password
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('token', resp.data);
      history('/home');
    }).catch((err) => toast.error(err.response.data));
  }

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
        <input 
          name='username' 
          type="text" 
          placeholder='Usuario'
          onChange={handleChange} 
          className='text-bold mb-1 text-center w-48' 
        />
        <input
          name="password" 
          type="password" 
          placeholder='Senha'
          onChange={handleChange} 
          className='text-bold text-center w-48' 
        />
      </div>
      <div className='w-ful mt-4 text-center'>
        <input
          onClick={clickLogin} 
          type="button" 
          value="ENTRAR" 
          className='active:shadow-none shadow-md shadow-gray-500 font-bold w-24 ml-auto mr-auto bg-red-600 border border-black' />
      </div>
    </div>
   </div>
  );
}

export default Login;