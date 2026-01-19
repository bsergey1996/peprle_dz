import { FC, ReactNode } from 'react';
import styles from './Paragraph.module.css';

interface ParagraphProps {
  children: ReactNode;
  fontSize?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, fontSize = '16px' }) => {
  return (
    <p
      className={styles['custom-paragraph']}
      style={{ fontSize }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
