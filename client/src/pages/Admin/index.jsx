import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import "./index.scss"
import UseFetchData from '../../hooks/UseFetchData';

const Admin = () => {
  const {data} = UseFetchData()
  const url = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:7000/${productId}`)
  }

  return (
    <>
    <Helmet>
      <title>Admin</title>
    </Helmet>
    <Formik
      initialValues={{ name: '', description: '', image: '', price: '', avatar: '', author: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
          description: Yup.string()
          .max(50, 'Must be 20 characters or less')
          .required('Required'),
          image: Yup.string().matches(url).required('Required'),
          price: Yup.number().required('Required'),
          avatar: Yup.string().matches(url).required('Required'),
          author: Yup.string().required('Required'),

      })}
      onSubmit={async (values, { resetForm }) => {
          await axios.post("http://localhost:7000", values)
          resetForm()
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="description">Desc</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />
        <label htmlFor="price">rice</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />
        <label htmlFor="avatar">Avatar</label>
        <Field name="avatar" type="text" />
        <ErrorMessage name="avatar" />
        <label htmlFor="author">Author</label>
        <Field name="author" type="text" />
        <ErrorMessage name="author" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <table>
      <tbody>
        {
          data && data.map((item) => (
            <tr>
              <td><img style={{ width: "100px", height: "100px"}} src={item.image} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td><img src={item.avatar} alt="" /></td>
              <td>{item.author}</td>
              <td><button onClick={() => handleDelete(item._id)} >Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  );
};

export default Admin