import styles from './Paragraph.module.css';

// fontSize имеет значение по умолчанию '16px'
const Paragraph = ({ children, fontSize = '16px' }) => {
  return (
    <p 
      className={styles['custom-paragraph']} 
      style={{ fontSize: fontSize }}
    >
      {children}
    </p>
  );
};

export default Paragraph;