import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; 
import LoginSignupModal from './LoginSignupModal'; 

const Button = ({ styleProp, textProp }) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext); 
  const [isModalOpen, setIsModalOpen] = React.useState(false); 

  const handleBookServiceClick = () => {
    if (isLoggedIn) {
      navigate('/booking');
    } else {
      setIsModalOpen(true); 
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
    navigate('/booking');
  };

  return (
    <div>
      <button className={`${styleProp} `} onClick={handleBookServiceClick}>
        {textProp}
      </button>
      <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Button;
