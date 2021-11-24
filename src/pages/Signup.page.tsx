import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Input from "../components/Input/Input";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { Switch } from "@headlessui/react";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const [isShow, setShow] = useState(false);
  const { handleSubmit, touched, getFieldProps, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("enter email")
          .email("please enter a valid email"),
        password: yup.string().required("enter password").min(8),
        username: yup.string().required().min(6),
      }),

      onSubmit: (data) => {
        
        setTimeout(() => {
          history.push("/login");
        }, 5000);
      },
    });
  return (
    <div className=" font-body px-11.4285 text-grayish py-2.8715 w-97.1485 h-148.8985 m-auto">
      <h1 className="mb-2 text-4xl font-medium ">Get started with a free account</h1>
      <div className="space-x-2 mb-12.5 text-sm tracking-wider">
        <span >Already have an account?</span>
        <Link to="/login">
          <span className="underline text-indigoish">Log in</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="pt-2.75 pb-6.25 mb-2 ">
            <FiUser className="absolute w-6 h-6 text-indigoish" />
            <Input
              id="username"
              type="username"
              autoComplete="username"
              required
              theme="indigo"
              {...getFieldProps("username")}
              touched={touched.username}
              error={errors.username}
              placeholder="Username"
            />
          </div>
          <div className="pt-2.75 pb-6.25 mb-2 ">
            <HiOutlineAtSymbol className="absolute w-6 h-6 text-indigoish" />
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
              type="password"
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
        <div className="mb-5 text-center">
          <input type="checkbox" name="keep logged" value="logged in"  />
          <label htmlFor="keep logged" className="text-gray-400 mt-14" > Keep me logged in</label>
          </div>
        <div className="flex justify-between">
          
          <div className="flex items-center justify-between">
            Show password
            <Switch.Group as="span" className="ml-1.75">
              <Switch
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
          <button
            type="submit"
            className="text-white rounded-md  px-5 py-1.75  text-sm bg-indigoish shadow-xl hover:transform"
          >
            Get started
          </button>
          {isSubmitting && <ImSpinner9 className="animate-spin" />}
        </div>
        <div className="text-center">
    
          <p className="mt-24 text-sm">
            © 2020 All Rights Reserved.{" "}
            <span className="text-indigoish">CORK</span> is a product of
            Designreset.{" "}
            <span className="text-indigoish">Cookie Preferences, Privacy,</span>{" "}
            and <span className="text-indigoish">Terms.</span>
          </p>
          <br />
        </div>
      </form>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
