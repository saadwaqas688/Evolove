import React from 'react'

const EditProfileIcon = ({color}) => {
  return (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18.0061" cy="18.0061" r="18.0061" fill="#1A1A1C"/>
    <path d="M18.006 17.1059C19.4976 17.1059 20.7069 15.8967 20.7069 14.405C20.7069 12.9133 19.4976 11.7041 18.006 11.7041C16.5143 11.7041 15.3051 12.9133 15.3051 14.405C15.3051 15.8967 16.5143 17.1059 18.006 17.1059Z" fill={color}/>
    <path d="M11.7038 25.2087C11.7038 21.7281 14.5254 18.9065 18.006 18.9065C21.4865 18.9065 24.3081 21.7281 24.3081 25.2087H11.7038Z" fill={color}/>
    </svg>
    
  )
}

export default EditProfileIcon