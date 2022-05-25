import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter First name'),
  lastName: Yup.string().required('Please enter Last name'),
});

export default validationSchema;