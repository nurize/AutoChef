import { useNavigate } from "react-router-dom";

const Button = ({styleProp, textProp}) => {
  const navigate = useNavigate();

  const handleBookServiceClick = () => {
    navigate('/booking');
  };

  return (  
    <div>
      <button className={`${styleProp}`} onClick={handleBookServiceClick}>{textProp}</button>
    </div>
  );
}
 
export default Button;