// 驗證包，太大包的就另外寫一支 js
import * as yup from 'yup';

// 名字對應 modals
const validationSchema = {
    Account: yup.string().email('電子郵件的格式有誤').required('欄位不得為空'),
    Password: yup.string().min(6, '最少不得低於6碼').max(16, '最多不得超過16碼').required('欄位不得為空'),
    Captcha: yup.string().required('欄位不得為空'), // TODO: captcha 待確認如何驗證
};

export default validationSchema;
