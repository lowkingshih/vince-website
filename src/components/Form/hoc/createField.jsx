import React from 'react';
import { compose } from '@/utils';

// template
import Input from '../component/Input';
import Radio from '../component/Radio';
import Select from '../component/Select';
import Captcha from '../component/Captcha';
import { withFormik } from 'formik';

const templates = {
    Input,
    Radio,
    Select,
    Captcha,
};

const createField = ({ template, fieldName, ...props }) => {
    return compose(withFormik(fieldName), addOptions(optionsName))(templates[template]);
};

export default createField;
