import { useFormik } from "formik";
import React from "react";
import { FC, memo } from "react";
import * as yup from "yup";
import { meUpdate } from "../api/auth";
import Button from "../components/Button/Button";

import InputTwo from "../components/InputTwo";
import { meSelector } from "../selectors/auth.selectors";

import { useAppSelector } from "../store";

interface Props {}

const ProfilePage: FC<Props> = () => {
  const user = useAppSelector(meSelector);

  const form = useFormik({
    initialValues: {
      firstName: user?.first_name,
      middleName: user?.middle_name,
      lastName: user?.last_name,

      date: user?.birth_date ? user?.birth_date.toDateString() : "",
      phoneNumber: user?.phone_number,
    },

    validationSchema: yup.object().shape({
      firstName: yup.string().required().min(3),
      middleName: yup.string().min(3),
      lastName: yup.string().required().min(3),
      
      // date:yup.date(),
      phoneNumber:yup.string().min(10)
    }),

    enableReinitialize: true,
    onSubmit: (userData) => {
      console.log(userData)
      const data = {
        first_name: userData.firstName,
        middle_name: userData.middleName,
        last_name: userData.lastName,
        birth_date: userData.date,
        phone_number: userData.phoneNumber,
      }
      meUpdate(data);
    },
  });

  return (
    <div className="w-full mx-4 mt-10 h-screen relative">
      <form className="rounded-md mt-13.45 border shadow-lg p-5" onSubmit={form.handleSubmit}>
        <h2 className="mx-2 mt-1 mb-10  ">GENERAL INFORMATION</h2>
            <img
              src={user!.profile_pic_url}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = "/avatar.jpg";
              }}
              alt=""
              className="object-cover rounded-lg shadow mr-11 w-28 h-28"
            />
            <div >
              <div className="flex ">
                <InputTwo
                  id="firstName"
                  type="name"
                  {...form.getFieldProps("firstName")}
                  autoComplete="first-name"
                  touched={form.touched.firstName}
                  value = {form.values.firstName}
                  error={form.errors.firstName}
                  placeholder="First Name "
                  className=" w-96"
                />
                <InputTwo
                  id="middleName"
                  type="name"
                  {...form.getFieldProps("middleName")}
                  autoComplete="middle-name"
                  touched={form.touched.middleName}
                  value= {form.values.middleName}
                  error={form.errors.middleName}
                  placeholder="Middle Name"
                  className="inline mx-2 w-96"
                />
              </div>
              <div className="flex">
                <InputTwo
                  id="lastName"
                  type="name"
                  autoComplete="last-name"
                  {...form.getFieldProps("lastName")}
                  touched={form.touched.lastName}
                  value= {form.values.lastName}
                  error={form.errors.lastName}
                  placeholder="Last Name"
                  className="w-64 mr-2 "
                />
                <InputTwo
                  id="date"
                  type="date"
                  autoComplete="bday"
                  {...form.getFieldProps("date")}
                  touched={form.touched.date}
                  value={form.values.date ? form.values.date!.toString() : ""}
                  className="w-64"
                  placeholder="date"
                />
              </div>
              <InputTwo
                id="phoneNumber"
                type="text"
                autoComplete="tel"
                {...form.getFieldProps("phoneNumber")}
                touched={form.touched.phoneNumber}
                value={form.values.phoneNumber}
                className="w-64"
                placeholder="Phone Number"
              />
            </div>
          
          <div className=" bg-navColor mt-40 px-5 py-2 h-12 rounded-lg  ">
            <div className="flex  justify-between ">
              <Button
                type="button"
                theme="indigo"
                themeClasses=""
                className="block shadow-light"
              >
                Reset All
              </Button>
              <Button
                type="submit"
                theme="green"
                themeClasses=""
                className=" block shadow-light"
              >
                save
              </Button>
            </div>
          </div>
      </form>
    </div>
  );
};

ProfilePage.defaultProps = {};

export default memo(ProfilePage);
