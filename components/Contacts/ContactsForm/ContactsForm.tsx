'use client'
import React, { useState } from 'react';
import styles from './contactsform.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import postFeedback from '@/api/postFeedback';

interface IFormInput {
  feedback_name: string
  feedback_surname: string
  feedback_email: string
  feedback_telephone: string
  feedback_comments: string
}

export function ContactsForm() {
  const [apiMsg, setApiMsg] = useState({ type: '', message: '' })
  const { register, formState: { errors }, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async data => {
    data.feedback_telephone =
      data.feedback_telephone
        .replaceAll('-', '')
        .replace('(', '')
        .replace(')', '')

    if (await postFeedback(JSON.stringify(data))) {
      setApiMsg({
        type: 'succeed',
        message: 'Ваша заявка успешно отправлена.'
      })
      reset()
    } else {
      setApiMsg({
        type: 'error',
        message: 'Что-то пошло не так. Попробуйте позже.'
      })
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Имя</label>
          <input
            className={styles.input}
            {...register("feedback_name", { required: true, pattern: /^[А-Яа-я]+$/i })}
            placeholder='Иван' />

          {errors.feedback_name?.type === 'required' && <p role="alert" className={styles.alert}>Обязательное поле</p>}
          {errors.feedback_name?.type === 'pattern' && <p role="alert" className={styles.alert}>Ошибка в имени</p>}
        </div>
        <div className={styles.block}>
          <label className={styles.label}>Фамилия</label>
          <input
            className={styles.input}
            {...register("feedback_surname", { pattern: /^[А-Яа-я]+$/i })}
            placeholder='Иванов' />

          {errors.feedback_surname?.type === 'pattern' && <p role="alert" className={styles.alert}>Ошибка в фамилии</p>}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            {...register("feedback_email", { pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })}
            placeholder='ivanov@ivan.ov' />

          {errors.feedback_email?.type === 'pattern' && <p role="alert" className={styles.alert}>Ошибка в почте</p>}
        </div>
        <div className={styles.block}>
          <label className={styles.label}>Телефон</label>
          <InputMask
            className={styles.input}
            mask="+7(999)999-99-99"
            {...register("feedback_telephone", { required: true, pattern: /[\+][7][(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}/i })}
            placeholder='+7(900)000-00-00' />

          {errors.feedback_telephone?.type === 'required' && <p role="alert" className={styles.alert}>Обязательное поле</p>}
          {errors.feedback_telephone?.type === 'pattern' && <p role="alert" className={styles.alert}>Ошибка в телефоне</p>}
        </div>
      </div>
      <div className={styles.block}>
        <label className={styles.label}>Комментарий</label>
        <textarea
          className={styles.input}
          {...register("feedback_comments", { required: true })}
          rows={5}
          placeholder='Комментарий...'></textarea>

        {errors.feedback_comments?.type === 'required' && <p role="alert" className={styles.alert}>Обязательное поле</p>}
      </div>
      <div className={styles.row}>
        <div className={styles.block}>
          <label className={styles.label}>Наш email</label>
          <input className={styles.input} value={'hi@triumf.it'} disabled />
        </div>
        <button className={styles.btn} type="submit">
          <p className={styles.btnText}>
            Отправить
            <svg className={styles.btnArrow} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="si:Arrow_right">
                <path id="v" d="M23.3333 26.6667L30 20M30 20L23.3333 13.3333M30 20H10" stroke="#21242C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </p>
        </button>
      </div>
      {apiMsg.type === 'succeed' &&
        <p role="textbox" className={styles.success}>{apiMsg.message}</p>
      }
      {apiMsg.type === 'error' &&
        <p role="textbox" className={styles.error}>{apiMsg.message}</p>
      }
    </form>
  );
}
