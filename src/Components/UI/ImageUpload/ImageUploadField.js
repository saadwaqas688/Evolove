import React from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
const ImageUploadField = ({
  name,
  children,
  id,
setPreviewImage
}) => {

  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);


  // if (mata && mata.touched && mata.error) {
  //   configTextfield.error = true;
  //   configTextfield.helperText = mata.error;
  //   console.log('mata.error',mata.error)
  // }

    const handleChange = async (evt) => {

        setFieldValue(name, evt.target.files[0]);  
        setPreviewImage(URL.createObjectURL(evt.target.files[0]));


        
    }

  return (
 <>
    <input
   accept="image/*"
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
