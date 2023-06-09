import styles from './Select.module.css' 
import Select from 'react-select';

const SelectComponent = ({title , ...rest}) => {
    return ( 
        <div className={styles.selectContainer}>
        <span>{title}</span>
        <Select {...rest} className={styles.select}
        />
      </div>
     );
}
 
export default SelectComponent;