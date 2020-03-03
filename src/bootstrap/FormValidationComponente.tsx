import * as React from 'react';
import { InjectedFormikProps, withFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    login: string;
}

interface FormProps {
    login?: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (props,) => (
    <form onSubmit={props.handleSubmit}>
        <input
            id="login"
            placeholder="User name..."
            type="text"
            onChange={props.handleChange}
            value={props.values.login}
        />
        {props.touched.login && props.errors.login &&
        <div>{props.errors.login}</div>}
        <button
            type="submit"
            disabled={props.isSubmitting}
        >
            Submit
        </button>
    </form>
);

const FormValidationComponente = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({ login: '' }),
    validationSchema: Yup.object().shape({
            login: Yup.string()
                .min(4, 'Please input 4 characters or more')
                .max(16, 'Please input 16 characters or less')
                .required('Please input login name'),
        },
    ),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(
            () => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
            },
            1000,
        );
    },
})(InnerForm);

export default FormValidationComponente;
