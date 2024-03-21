import React from 'react';
import * as Yup from 'yup';

import {
  Card,
  Input,
  Typography,
  Button,
  Checkbox,
  Radio,
  Textarea,
  Option,
  Select,

} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addBlogs } from '../features/blogSlice';
import { nanoid } from '@reduxjs/toolkit';


const AddForm = () => {
   const dispatch = useDispatch();
   const nav = useNavigate();

  const valSchema = Yup.object({
    title:Yup.string().required(),
    detail: Yup.string().required(),
    email:Yup.string().matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    ).required(),
    place: Yup.string().required(),
    times: Yup.array().min(1).required(),
    topics:Yup.string().required(),
    date:Yup.date().required(),

    imageFile :Yup.mixed().test('fileType', 'Invalid file type', (value)=>{
      return value && ['image/jpeg', 'image/png','image/jpg'].includes(value.type);
    })
    .test('filesize', 'File too large', (value) => value && value.size <= 4*1024*1024)

  });

  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
      email:'',
      place: '',
      times: [],
      topics:'',
      imageFile:null,
      imageUrl:'',
      date:''
    },
    onSubmit: (values) => {
      const newData = {
        title: values.title,
        detail: values.detail,
        email:values.email,
        place: values.place,
        times: values.times,
        topics:values.topics,
        imageUrl:values.imageUrl,
        date:values.date,
        id:nanoid()

      }
      dispatch(addBlogs(newData));
      nav(-1)
    },
    validationSchema:valSchema


  });

  const radioData = [
    {label:'Home' ,color:'purple'},
    {label:'Outdoor', color:'red' },
  ]
  const checkData = [
    {label:'ReactJs', color:'gray', value:'react'},
    {label:'NodeJs',color:'purple', value:'node'},
    {label:'Python',color:'red', value:'python' },
    {label:'Larva',color:'green', value:'larva'},
    {label:'Django',color:'yellow', value:'django'},
    {label:'Flutter',color:'blue', value:'flutter'},
    {label:'NextJs',color:'brown', value:'nextjs'},
  ]

  return (
    <div>
      <Card shadow={true} color='transparent' className='px-10 py-5 mt-7 mb-7 max-w-xl border-2 border-gray-700 mx-auto'>
        <form onSubmit={formik.handleSubmit} className=" ">
          <Typography className='text-3xl font-bold'> SignUp</Typography>
          <Typography className='mb-1'> Nice to meet You !!! Enter your details to register.</Typography>
          <div className=" flex flex-col gap-6">
            
            <Input
              size="lg"
              label='Title'
              placeholder='Full Name'
              type='text'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title && <h1 className='text-pink-700 text-center'>{formik.errors.title}</h1>}
            <Textarea
              size="lg"
              label='Description'
              type='text'
              name='detail'
              value={formik.values.detail}
              onChange={formik.handleChange}
            />
            <Input
              size="lg"
              label='Email'
              placeholder="abcde12A@gmail.com"
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && <h1 className='text-pink-700'>{formik.errors.email}</h1>}

            <Input 
             label='Select date'
             type='date'
             name='date'
             value={formik.values.darte}
             onChange={formik.handleChange}
              />
              {formik.errors.date && formik.touched.date && <h1 className='text-pink-700'>{formik.errors.date}</h1>}

            <Input
             label ='Time'
             type='datetime-local'/>

           <div>
            <Typography variant='h5' color='brown'>Pick the Place</Typography>
            <div className="grid grid-cols-2 w-max gap-4">
              {radioData.map((rad, i)=>{
                return   <Radio key={i} 
                name='place' 
                color={rad.color} 
                label={rad.label} 
                onChange={formik.handleChange} 
                value={rad.label}
                />

              })} 
          </div>
            </div>

         
          <Typography variant='h5' color='blue'>Select the Course</Typography>
           <div className="grid grid-cols-4 w-max gap-4">
            {checkData.map((check, i)=>{
              return <Checkbox key={i}
               label={check.label} 
               color={check.color} 
               onChange={formik.handleChange} 
               name='times'
               value={check.label} />
            })}  
            </div>
            {formik.errors.times && formik.touched.times && <h1 className='text-pink-700'>{formik.errors.times}</h1>} 
         

         
          <div className="w-72">
               <Select  color='purple' label="Select Topics" onChange={(e)=>formik.setFieldValue('topics', e)}>
                <Option value='html'> HTML</Option>
                <Option value='css'> CSS</Option>
                <Option value='javascript'> JavaScript</Option>
                <Option value='c++'> C++</Option>
                <Option value='java'> Java</Option>
               </Select>
               {formik.errors.topics && formik.touched.topics && <h1 className='text-pink-700'>{formik.errors.topics}</h1>}

          </div>

          <Input
            onChange={(e)=>{
              const file = e.target.files[0];
              formik.setFieldValue('imageFile', file)
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', (e)=>{
               formik.setFieldValue('imageUrl', e.target.result)
              })
            }}
              size="lg"
              label='Image'
              type='file'
              name='imageFile'
              accept='image/*'
           />
           {formik.errors.imageFile && formik.touched.imageFile && <h1 className='mt-2 text-pink-700' >{formik.errors.imageFile}</h1>}

           {formik.values.imageUrl && !formik.errors.imageFile && <div className=''>
            <img className='h-[200px]' src={formik.values.imageUrl} alt=''/>
            </div>}

            <Button type='submit'> SignUp</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddForm;
