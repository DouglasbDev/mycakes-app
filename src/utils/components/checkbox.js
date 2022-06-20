import { useState } from "react";
import './checkbox'


function renderLabel(label){
    return label ? (<span>{ label } </span>) : null
}

function Checkbox({ label, onChange }){
    const [ checked, setChecked ] = useState(false)



    function toggle(){
        const newValue = !checked
        setChecked(newValue)
        onChange && onChange( newValue )
    }


    const checkedClass = checked ? "checked" : "";
    const containerClass = `checkedbox ${checkedClass}`.trim()


    return (
        <div className="checkbox-container" onclick={toggle}>
            <div className={containerClass} />
            { renderLabel(label) }
        </div>
        
    )
}

Checkbox.defaultProps = {
    label: ""
}

export default Checkbox;