import * as yup from 'yup';

export const changePasswordSchema = yup
  .object({
    password: yup
      .string()
      .min(8, '최소 8자 이상 작성해야 합니다.')
      .max(16, '최대 16자까지 작성 가능합니다.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
        '비밀번호는 영어, 숫자, 특수문자만 가능합니다.'
      )
      .required('비밀번호를 입력해 주세요!'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 다릅니다.')
      .required('비밀번호를 한번 더 입력해 주세요'),
  })
  .required();
