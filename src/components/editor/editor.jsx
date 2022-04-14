import React from 'react';
import CardAddForm from '../card-add-form/card-add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {
      Object.keys(cards).map((key) => <CardEditForm FileInput={FileInput} key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />)
    }
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
  );

export default Editor;