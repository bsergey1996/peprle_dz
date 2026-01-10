import './Paragraph.css';

// fontSize имеет значение по умолчанию '16px'
const Paragraph = ({ children, fontSize = '16px' }) => {
  return (
    <p 
      className="custom-paragraph" 
      style={{ fontSize: fontSize }}
    >
      {children}
    </p>
  );
};

export default Paragraph;