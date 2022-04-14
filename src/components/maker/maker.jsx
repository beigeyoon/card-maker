import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService, FileInput}) => {

  const [cards, setCards] = useState({
    1: {
        id: '1',
        name: 'Yooni',
        company: 'KUUS',
        theme: 'dark',
        title: 'Software Engineer',
        email: 'yooni@gmail.com',
        message: 'mango',
        fileName: 'yooni',
        fileURL: null
      },
    2: {
        id: '2',
        name: 'Heetaku',
        company: 'LG CNS',
        theme: 'light',
        title: 'Software Engineer',
        email: 'heetaku@gmail.com',
        message: 'mango',
        fileName: 'heetaku',
        fileURL: 'heetaku.png'
      },
    3: {
        id: '3',
        name: 'Luna',
        company: 'LunaVillage',
        theme: 'colorful',
        title: 'Software Engineer',
        email: 'luna@gmail.com',
        message: 'mango',
        fileName: 'luna',
        fileURL: null
      }
  })

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    })
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated={...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated={...cards};
      delete updated[card.id];
      return updated;
    });
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}
export default Maker;