'use client'
import styles from './styles.module.scss'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'

export function MapCountrySelect({country, currentCountry}){
    // const mapCountry = useSelector((state) => state.countryReducer.mapCountry)
    const customStyles = {
        control: (defaultStyles) => ({
          ...defaultStyles,
          width: '200px',
          backgroundColor: "#f7f7f7",
          padding: "13px 20px",
          borderRadius: "50px",
          color: '#141616',
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          fontSize: '15px',
          lineHeight: '130%',
          letterSpacing: '0.15px',
          cursor: 'pointer',
        }),
    
        placeholder: (defaultStyles) => ({ ...defaultStyles, color: '#141616' }),
    
        indicatorSeparator: (defaultStyles) => ({ ...defaultStyles, display: 'none' }),
    
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#141616" }),
    
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
        }),
      };

      const options = [
        { value: 'USA', label: 'USA', latitude: '40.290128', longitude: '-101.312934', zoom: 4},
        { value: 'United Kingdom', label: 'United Kingdom', latitude: '51.954081', longitude: '-1.101042', zoom: 6 },
        { value: 'Singapore', label: 'Singapore', latitude: '1.372501', longitude: '103.801277', zoom: 11 },
        { value: 'Hong Kong', label: 'Hong Kong', latitude: '22.358665', longitude: '114.181351', zoom:10 },
        { value: 'Taiwan', label: 'Taiwan', latitude: '23.720006', longitude: '120.969320', zoom: 7 },
      ];

      // console.log(options.find(i => i.label == mapCountry));
      // console.log(options[4]);

    return(
        <Select
            onChange={selectedOption => country(selectedOption)}
            styles={customStyles}
            options={options}
            isSearchable={false}
            // placeholder={'usa'}
            // value={mapCountry}
            defaultValue = {currentCountry}
            // defaultValue = {options.find(i => i.label == mapCountry)}
            // placeholder={mapCountry}
        />
    )
}