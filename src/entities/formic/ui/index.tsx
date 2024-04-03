import React from "react";
import s from "./formic.module.scss";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
  } from 'formik';
import { IUsers } from "../../../app/api";
  interface MyFormValues {
    first: string;
    last:string;
    email:string;
  }
export const CustomFormic:React.FC<IUsers> = ({name,email}) => {

    const initialValues: MyFormValues = { first: name.first,last:name.last,email };
    
    
    
  return (
    <Formik
      initialValues={initialValues}
      
      validate={(values) => {
        const errors:{email?:string,first?:string,last?:string} = {};
        if (!values.email) {
          errors.email = "Required email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.first) {
            errors.first = "Required first name";
        }
        if (!values.last) {
            errors.last = "Required last name";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.formic} >
          <Field type="text" name="first" placeholder="first name"  />
          <Field type="text" name="last" placeholder="last name" />
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="first" component="div" className={`${s.errorMess} ${s.errorfirst}`}/>
          <ErrorMessage name="last" component="div" className={`${s.errorMess} ${s.errorlast}`}/>
          <ErrorMessage name="email" component="div" className={`${s.errorMess} ${s.erroremail}`}/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
