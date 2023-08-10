import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik, validateYupSchema } from "formik"
import * as Yup from "yup"
export default function Contact(){ 
    // const user_name = formik.values.name
    const form = useRef()
    const formik = useFormik({
        initialValues: {
            name: "", 
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(20, "Name must be 20 characters or less.").required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            message: Yup.string().required("Write a message.")
    })
})
const sendEmail = (e) => {
    formik.handleSubmit
    e.preventDefault();

    emailjs.sendForm('service_kedbc0a', 'template_gxtlhok', form.current, 'hdTUA5JHs1ePTC98h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  console.log(formik.values)
    return(
        <section id="contact" className="min-h-screen">
            <h2 className="text-white text-center text-5xl md:text-8xl lg:text-8xl my-20 font-bold cursor-default hover">Contact</h2>
            <div className="border border-[#6e6e6e] hover:border-sky-500 mx-auto p-7 my-20 gray rounded-lg flex flex-col justify-center max-w-md">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center p-4">
                <label htmlFor="name" className="text-white font-medium block py-4">Your Name</label>
                <input className="w-[100%] bg-black font-medium p-3 rounded-lg outline-none text-white
                focus:border
                focus:border-sky-500 focus:ring-sky-500" placeholder="What's your name?" id="name" type="name"  name="name" onChange={formik.handleChange} value={formik.values.user_name} onBlur={formik.onBlur}/>
                <p className={`font-light text-red-500 text-xs mt-3`}>{formik.errors.name? formik.errors.name : ""}</p>
           
            <label htmlFor="email"  className="text-white font-medium block py-4">
                Your Email</label>
                <input className="w-[100%] bg-black font-medium p-3  outline-none text-white rounded-lg
                 focus:border
                 focus:border-sky-500 focus:ring-sky-500" placeholder="What's your web address?" type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.user_email} onBlur={formik.onBlur} />
                 <p className={`font-light text-red-500 text-xs mt-3`}>{formik.errors.email? formik.errors.email: ""}</p>
            
            <label htmlFor="message"  className="text-white font-medium block py-4"> 
                Your Message
                <textarea rows={5} cols={6}className="w-[100%] bg-black font-medium p-3 rounded-lg overflow-hidden  outline-none text-white focus:border
                 focus:border-sky-500 focus:ring-sky-500" name="message" id="message" placeholder="What you want to say?"  onChange={formik.handleChange} value={formik.values.user_message} onBlur={formik.onBlur}/></label> 
                 <p className={`font-light text-red-500 text-xs mt-3`}>{formik.errors.message? formik.errors.message: ""}</p>
                
                 
             
             <button type="submit" className="my-12 mx-auto text-center neon-button">SEND  </button>

            </form>
            </div>
        </section>
    )
}