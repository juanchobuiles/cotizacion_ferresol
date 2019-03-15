import React from 'react'
import Select from 'react-select';
const SelectCombobox = (props) => (
    <Select 
        className="cotizacion-select-options"
        isSearchable
        placeholder="Seleccione...."
        options={props.option}
        onChange = {props.onChange}
        isClearable = {props.isClearable}
        isMulti
    />

    
)
export default SelectCombobox