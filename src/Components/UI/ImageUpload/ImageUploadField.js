import React from 'react';
import PropTypes from 'prop-types';
import {useFormikContext } from 'formik';
const ImageUploadField = ({
  name,
  children,
  id,
setPreviewImage
}) => {

  const { setFieldValue } = useFormikContext();


    const handleChange = (evt) => {

        setFieldValue(name, evt.target.files[0]);  
        setPreviewImage(URL.createObjectURL(evt.target.files[0]));


        
    }

  return (
 <>
    <input
       accept={id==="video"? "video/mp4,video/x-m4v,video/*":"image/*"}

   style={{ display: 'none'}}
  id={id}
  type="file"
  onChange={handleChange }
/>
<>
{children}
</>
 </>
  );
};


ImageUploadField.propTypes = {
  children: PropTypes.any,
  name: PropTypes.any,
  id:PropTypes.string,
  setPreviewImage:PropTypes.func,
};

ImageUploadField.defaultProps = {
  children: <></>,
  name:"image",
  id:"file",
  setPreviewImage:null,

};

export default ImageUploadField;
