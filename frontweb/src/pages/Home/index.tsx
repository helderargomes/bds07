import Navbar from 'components/Navbar';
import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-content-container">
          <ButtonIcon />
          <h2>Comece agora a navegar</h2>
        </div>

        <div className="home-image-container">
          <MainImage />
          <h1>O carro perfeito para você</h1>
          <h4>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
