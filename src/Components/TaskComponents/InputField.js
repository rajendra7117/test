import React from 'react'

const InputField = ({label,type, placeholder, icon, onChange, onBlur, hasError, value}) => {

    let className = `input-div`
    if(hasError){
        className=`input-div error`
    }



  return (
    <div className={className}>
          <label>{label}</label>
          {icon}
          <input type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} />
          <span className='error-msg'><h5>This field Should not be empty</h5></span>

        </div>
  )
}

export default InputField