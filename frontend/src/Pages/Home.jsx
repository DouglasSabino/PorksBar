import backgroundImage from '../assets/bg-brics.jpg';

function Home() {
    return (
      <div 
      className='bg-cover bg-center h-screen'
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',  
        backgroundPosition: 'center top' 
      }}
      >
        Deu certo
      </div>
    )
}

export default Home;