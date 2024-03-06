import React from 'react';
import { useFormik } from 'formik'; 

const ContactPage = ({ addSome }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (val,{resetForm}) => {
      addSome(val);
      resetForm();
    },
  });

  return (
    <div className='p-3 m-5  '>
      <form  onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label><br />
          <input
            className='border border-black-100 outline-none focus:ring-2 focus:ring-pink-500 text-center'
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor='description'>Description</label><br />
          <textarea
            className='border border-black-100 outline-none focus:ring-2 focus:ring-pink-500' 
            type='text'
            name='description'
            id='description'
            placeholder='Description'
            onChange={formik.handleChange}
            value={formik.values.description}
        
          />
        </div>
        <button type='submit' className='bg-green-300 text-black w-52 rounded-xl'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
