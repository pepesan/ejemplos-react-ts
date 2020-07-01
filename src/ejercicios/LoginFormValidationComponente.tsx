import React, {Component} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class LoginFormValidationComponente extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Tiene que ser un email válido')
                        .required('Tiene que introducir un email, es obligatorio'),
                    password: Yup.string()
                        .min(6, 'Pero pon una contraseña un poco más larga, al menos 6 caracteres!')
                        .max(20, 'Te has pasado de caracteres, son 20 como mucho!')
                        .required('Password is required'),
                })}
                onSubmit={fields => {
                    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email"
                                   className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password"
                                   className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Login</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}



export default LoginFormValidationComponente;
