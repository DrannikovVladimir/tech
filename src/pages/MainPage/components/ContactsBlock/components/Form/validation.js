import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
});

export default validationSchema;