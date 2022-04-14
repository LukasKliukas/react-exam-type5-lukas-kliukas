import Container from './../../components/UI/Container';
import { useEffect, useState } from 'react';
import css from './Add.module.css';

const url = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';
const token = localStorage.getItem('token');

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {}, []);

  async function sendPostFetch() {
    //Validacija
    // if (petName.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     name: 'Name cant be blank',
    //   }));
    // }
    // if (dob.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     dob: 'Dob cant be blank',
    //   }));
    // }
    // if (email.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     client_email: 'Email cant be blank',
    //   }));
    // }
    //ar yra klaidu
    // console.log('errorObj ===', errorObj);
    // const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    // console.log('isErrorsEmpty ===', isErrorsEmpty);
    // if (isError) {
    //   return;
    // }
    //jei yra mes nutraukiame funkcijos vygdyma

    const newPostObj = {
      title: title,
      description: description,
    };
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    console.log('atsInJs ===', atsInJs);
    if (atsInJs.msg) {
      setMessage(atsInJs.msg);
    }
    if (atsInJs.err) {
      setMessage(atsInJs.err);
    }

    // if (atsInJs.changes === 1) {
    //   //redirect to pets page
    //   history.push('/');
    // }
    // if (atsInJs.err) {
    //   setIsError(true);
    // }
  }
  function submitHandler(e) {
    // setIsError(false);
    e.preventDefault();
    sendPostFetch();
  }

  return (
    <Container>
      <h2>Add new skill</h2>
      <form onSubmit={submitHandler} className={css.form}>
        {message && <h2 className={css.message}>{message}</h2>}
        <label htmlFor='title'>Enter your skill title :</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter your title'
          value={title}
          id='title'
        />
        <label htmlFor='desc'>Enter your skill description :</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name='desc'
          id='desc'
          cols='30'
          rows='10'
          value={description}
          placeholder='Enter your description'
        ></textarea>
        <button className={css.btn} type='submit'>
          Add skill
        </button>
      </form>
    </Container>
  );
};

export default Add;
