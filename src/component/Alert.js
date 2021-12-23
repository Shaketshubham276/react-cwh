import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
        // slice help to get output after the index value written in that text
    }

    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.types)}</strong>:{props.alert.msg}
                
                </div>
        </div>
    )
}
