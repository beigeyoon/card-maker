import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    setIsLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setIsLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} ref={inputRef} type="file" accept='image/*' name='file' onChange={onChange}></input>
      {
        !isLoading &&
        <button className={`${styles.button} ${name? styles.pink : styles.grey}`} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      }
      {isLoading && <div className={styles.loading}></div>}
    </div>
  )
}

export default ImageFileInput;