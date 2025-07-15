'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Link from 'next/link';
import Header from '@/components/header';

interface LoginFormValues {
  name:string
  email: string;
  password: string;
}


const initialValues: LoginFormValues = {
  name:'',
  email: '',
  password: '',
};


const validationSchema = z.object({
  name: z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be at most 50 characters'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});


const LoginForm: React.FC = () => {
  const router = useRouter();

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setFieldError }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const response = await axios.post('/api/login', values);
      const { token } = response.data;
      localStorage.setItem('token', token);
      router.push('/login');
    } catch (err: any) {
      if (err.response?.data?.message) {
        setFieldError('password', err.response.data.message);
      } else {
        setFieldError('password', 'Login failed');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
        <Header minimal={true}/>
        <div className="min-h-screen min-w-full flex items-center justify-center">
            <div className="w-full max-w-[500px] mx-auto p-8 rounded shadow-lg bg-white/10 backdrop-blur-sm border border-[#4A9782]">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#DCD0A8]">Register</h2>

                <Formik<LoginFormValues>
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(validationSchema)}
                onSubmit={onSubmit}
                >
                {({ isSubmitting }) => (
                    <Form className="space-y-6 text-white">

                    <div>
                        <label htmlFor="name" className="block mb-1 text-[#DCD0A8]">Full Name</label>
                        <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 rounded border border-[#4A9782] bg-transparent text-black placeholder:text-[#a9c8bd] focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-[#DCD0A8]">Email</label>
                        <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded border border-[#4A9782] bg-transparent text-black placeholder:text-[#a9c8bd] focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-[#DCD0A8]">Password</label>
                        <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 rounded border border-[#4A9782] bg-transparent text-black placeholder:text-[#a9c8bd] focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#4A9782] hover:bg-[#3d7e6c] text-white font-semibold py-2 rounded transition duration-300"
                    >
                        {isSubmitting ? 'creating acccount ...' : 'Register'}
                    </button>
                    <div className="text-center mt-4 text-[#004030]">
                        Already have an account ?&nbsp;
                        <Link href="/login" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                            Log In
                        </Link>
                    </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;

