import styles from './styles.module.scss'
import Select from 'react-select'

export function ProductsSorting({sortSetter}){
    const options = [
        { value: 'Newest', label: 'Newest' },
        { value: 'Oldest', label: 'Oldest' },
        { value: 'Cheapest', label: 'Cheapest' },
        { value: 'Most Expensive', label: 'Most Expensive' },
    ];
    
    const customStyles = {
        container: (defaultStyles) => ({
            ...defaultStyles,
            width: 'fit-content'
        }),

        control: (defaultStyles) => ({
          ...defaultStyles,
          width: '200px',
          backgroundColor: "transparent",
          padding: "13px 20px",
          borderRadius: "50px",
          color: '#f7f7f7',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          fontSize: '15px',
          lineHeight: '130%',
          letterSpacing: '0.15px',
          cursor: 'pointer',
        }),
    
        placeholder: (defaultStyles) => ({ ...defaultStyles, color: '#f7f7f7' }),
    
        indicatorSeparator: (defaultStyles) => ({ ...defaultStyles, display: 'none' }),
    
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#f7f7f7" }),
    
        menu: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? '#00ff00' : '#141616',
          backgroundColor: '#f7f7f7',
          borderRadius: '50px',
          textAlign: 'center',
          zIndex: '9999',
        }),
    
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? '#00ff00' : '#141616',
          backgroundColor: 'transparent',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          fontSize: '15px',
          lineHeight: '130%',
          letterSpacing: '0.15px',
          cursor: 'pointer',
          width: '200px',
        }),
      };

    return(
        <Select
            onChange={(selectedOption) => {sortSetter(selectedOption.value)}}
            options={options}
            isSearchable={false}
            styles={customStyles}
            defaultValue={options[0]}
        />
    )
}