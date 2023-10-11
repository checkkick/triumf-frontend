'use client'
import React from 'react';
import styles from './contactsform.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  telephone: string
  comment: string
}

export function ContactsForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Имя</label>
          <input className={styles.input} {...register("firstName", { required: true, pattern: /^[А-Яа-я]+$/i })} placeholder='Иван' />
        </div>
        <div className={styles.block}>
          <label className={styles.label}>Фамилия</label>
          <input className={styles.input} {...register("lastName", { required: true, pattern: /^[А-Яа-я]+$/i })} placeholder='Иванов' />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} {...register("email")} placeholder='ivanov@ivan.ov' />
        </div>
        <div className={styles.block}>
          <label className={styles.label}>Телефон</label>
          <input className={styles.input} {...register("telephone")} placeholder='+7 (900) 000-00-00' />
        </div>
      </div>
      <div className={styles.block}>
        <label className={styles.label}>Комментарий</label>
        <textarea className={styles.input} {...register("comment",)} rows={5} placeholder='Комментарий...'></textarea>
      </div>
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Наш email</label>
          <input className={styles.input} value={'hi@triumf.it'} disabled />
        </div>
        <button className={styles.btn} type="submit">Отправить</button>
      </div>
    </form>
  );
}
