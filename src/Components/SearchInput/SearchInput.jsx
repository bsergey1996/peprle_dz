import styles from './SearchInput.module.css';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles['input-wrapper']}> 
      <svg 
        className={styles['search-icon']} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={2} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      
      <input 
        type="text" 
        className={styles['custom-input']}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;