import * as React from 'react';
import { useFormik } from 'formik';
import cn from 'classnames'
//components
import FeedbackForm from '../FeedbackForm/FeedbackForm';
//icons
import Attachment from '../../../../../../assets/icons/contacts/attachment.svg';
//styles
import '../../ContactsBlockStyle.scss';
//validation
import validationSchema from './validation.js';

const Form = () => {
  const [isSubmited, setIsSubmited] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      company: '',
      tellUs: '',
      attachment: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
      setIsSubmited(true);
    }
  });

  const classInputFirstName = cn('form__input', {
    'form__input--error': !formik.isValid,
  });

  const classInputLastName = cn('form__input', {
    'form__input--error': !formik.isValid,
  });

  return (
    <>
      {!isSubmited
        ? (
            <form onSubmit={formik.handleSubmit} className="form">
              <div className="form__wrapper">
                <div className="form-field__wrapper">
                  <label htmlFor="firstName" className="visually-hidden">first name</label>
                  <input
                    type="text"
                    className={classInputFirstName}
                    id="firstName"
                    name="firstName"
                    placeholder="First name*"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </div>
                <div className="form-field__wrapper">
                  <label htmlFor="lastName" className="visually-hidden">last name</label>
                  <input
                    type="text"
                    className={classInputLastName}
                    id="lastName"
                    name="lastName"
                    placeholder="Last name*"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </div>
                <div className="form-field__wrapper">
                  <label htmlFor="company" className="visually-hidden">last name</label>
                  <input
                    type="text"
                    className="form__input"
                    id="company"
                    name="company"
                    placeholder="Company"
                    onChange={formik.handleChange}
                    value={formik.values.company}
                  />
                </div>
                <div className="form-field__wrapper">
                  <label htmlFor="tellUs" className="visually-hidden">last name</label>
                  <input
                    type="text"
                    className="form__input"
                    id="tellUs"
                    name="tellUs"
                    placeholder="Tell us about project"
                    onChange={formik.handleChange}
                    value={formik.values.tellUs}
                  />
                </div>
                <div className="form-field__wrapper">
                  <input type="file" className="form-input__file" id="attachment" name="attachment" />
                  <label htmlFor="attachment" className="form-label__file">
                    <span className="file-icon__wrapper">
                      <img className="file-icon" src={Attachment} alt="" />
                    </span>
                    <span className="file-icon__text">Add attachment</span>
                  </label>
                </div>
              </div>
              {formik.touched.firstName && formik.errors.firstName
                ? <div className="form__error-feedback">{formik.errors.firstName}</div>
                : null}
              {formik.touched.lastName && formik.errors.lastName
                ? <div className="form__error-feedback">{formik.errors.lastName}</div>
                : null}
              <button className="form-button__submit" type="submit">Send Request</button>
            </form>
        ) : <FeedbackForm />}
        {isSubmited ? <button type="button" className="form-button__submit" onClick={() => setIsSubmited(false)} disabled={formik.isSubmitting}>Send another message</button> : null}
    </>
  )    
};

export default Form;