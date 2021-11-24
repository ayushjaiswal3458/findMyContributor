import React, { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { ImSpinner9 } from "react-icons/im";

import { FiUser } from "react-icons/fi";
import * as yup from "yup";
import { FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import Input from "../components/Input/Input";

import { Switch } from "@headlessui/react";
import Button from "../components/Button/Button";



import { onLoginAction } from "../actions/auth.action";
import { useDispatch } from "react-redux";


interface Props {
  
}

const Login: FC<Props> = (props) => {
  // const [data, setData] = useState({ email: "", password: "" });
  // const [touched, setTouched] = useState({ email: false, password: false });
  // const [submitting, setSubmitting] = useState(false);

  // const history = useHistory();
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const nameOfChangeInput = event.target.name;
  //   setData({ ...data, [nameOfChangeInput]: event.target.value });
  // };
  // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   const nameOfBlurInput = event.target.name;
  //   setTouched({ ...touched, [nameOfBlurInput]: true });
  // };

  // let emailError = "";
  // let passwordError = "";

  // if (!data.email) {
  //   emailError = "Email address is required";
  // } else if (!data.email.endsWith("@gmail.com")) {
  //   emailError = "please enter a valid email address";
  // }
  // if (!data.password) {
  //   passwordError = "Password is required";
  // } else if (data.password.length < 8) {
  //   passwordError = "please enter atleast 8 characters";
  // }
  // const formValidator=yup.object().shape({
  //   email:yup.string().required().email(),
  //   password:yup.string().required().min(8)
  // })
 
  const [isShow, setShow] = useState(false);
  const dispatch = useDispatch();

  const { handleSubmit, touched, getFieldProps, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("enter email")
          .email("please enter a valid email"),
        password: yup.string().required("enter password").min(8),
      }),

      onSubmit: (data) => {
        dispatch(onLoginAction(data));
      }
    });

    

  return (
    <div className=" font-body text-grayish py-2.8715 px-11.4285 mx-auto w-97.1485 h-148.8985 ">
      <div>
        <h1 className="mb-2 font-medium whitespace-nowrap text-Login">
          Log in to <span className=" text-indigoish">findMyContributor</span>
        </h1>
        <div className=" space-x-2 text-sm mb-12.5 whitespace-nowrap">
          <span className="tracking-wider ">New Here?</span>
          <Link to="/signup">
            <span className="tracking-widest underline text-indigoish">
              Create an account
            </span>
          </Link>

          <Link to="/dashboard">
            <span className="tracking-widest underline text-indigoish">
              Go to Dashboard
            </span>
          </Link>
        </div>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="">
            <div className="pt-2.75 pb-6.25 mb-2 ">
              <FiUser className="absolute w-6 h-6 text-indigoish" />
              <Input
                id="email-address"
                type="email"
                autoComplete="email"
                required
                theme="indigo"
                {...getFieldProps("email")}
                touched={touched.email}
                error={errors.email}
                placeholder="Email address"
              />
            </div>
            <div className="pt-2.75 pb-6.25 mb-2 ">
              <FiLock className="absolute w-6 h-6 text-indigoish" />
              <Input
                id="password"
                type={isShow ? "text" : "password"}
                autoComplete="current-password"
                required
                theme="indigo"
                {...getFieldProps("password")}
                touched={touched.password}
                error={errors.password}
                placeholder="password"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-between">
              Show password
              <Switch.Group as="span" className="ml-1.75">
                <Switch
                type="button"
                  checked={isShow}
                  onChange={setShow}
                  className={`${
                    isShow ? "bg-indigoish" : "bg-indigo-100"
                  } relative inline-flex  items-center h-4.5 rounded-full w-8.75`}
                >
                  <span className="sr-only">show password</span>
                  <span
                    className={`${
                      isShow ? "translate-x-5" : "translate-x-0"
                    } inline-block w-3.5 h-3.5 shadow-md transform ease-in-out duration-300 bg-white transition transition-color  rounded-full`}
                  />
                </Switch>
              </Switch.Group>
            </div>
            <Button type="submit" theme="indigo" themeClasses=" "  >Sign in</Button>
            {isSubmitting && <ImSpinner9 className="animate-spin" />}
          </div>
          <div className="text-center">
          <input type="checkbox" name="keep logged" value="logged in"  />
          <label htmlFor="keep logged" className="text-gray-400 mt-14" > Keep me logged in</label>
          <p className="text-base font-semibold tracking-wider text-indigoish mt-3.5">Forgot Password?</p>
          <p className="mt-24 text-sm">© 2020 All Rights Reserved. <span className="text-indigoish">CORK</span> is a product of Designreset. <span className="text-indigoish">Cookie Preferences, Privacy,</span> and <span className="text-indigoish">Terms.</span></p>
          <br />
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
