import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import MobileInput from "../Components/Webiste/Common/forms/MobileInput";
import Label from "../Components/Webiste/Common/forms/Label";
import { BsArrowRight } from "react-icons/bs";
const Signup = () => {
  const navigate = useNavigate();
  const [formType, SetFormType] = useState("individual");

  return (
    <main className="grid container2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen  ">
      <Box
        className="relative flex text-white flex-col justify-between  items-center"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          bgcolor: "primary.main",
        }}
      >
        <h1
          className="w-full p-6 border-b border-white border-opacity-20"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6 "
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <Typography variant="h4">Welcome back!</Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
            See the latest system update on our blog
          </Typography>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
          alt=""
          className="self-start"
        />
      </Box>
      <div className="bg-white relative">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute bottom-0 right-0 rotate-180"
        />
        <h1 className="w-full p-4 border-b text-end border-gray-300 border-opacity-20">
          <Typography variant="subtitle1">
            I already have an account?{" "}
            <Button
              sx={{ textTransform: "none" }}
              size="large"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </Typography>
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <Typography variant="h4" fontWeight={600}>
                Sign up to Laundramoon
              </Typography>
              <Typography variant="h6" color="text.muted">
                Please fill in your details below and we will get in touch with
                you shortly.
              </Typography>
            </div>
            <div className="flex gap-8 w-full">
              <div className="flex justify-center items-center gap-4 font-bold">
                <input
                  type="radio"
                  name="formType"
                  className="radio radio-accent"
                  id="formType-1"
                  value={"individual"}
                  checked={formType === "individual"}
                  onChange={(e) => {
                    SetFormType(e.target.value);
                  }}
                />
                <label htmlFor="formType-1">Individual </label>
              </div>
              <div className="flex justify-center items-center gap-4 font-bold">
                <input
                  type="radio"
                  name="formType"
                  id="formType-2"
                  className="radio radio-accent"
                  value="company"
                  checked={formType === "company"}
                  onChange={(e) => {
                    SetFormType(e.target.value);
                  }}
                />
                <label htmlFor="formType-2">Company </label>
              </div>
            </div>
            {formType === "individual" ? <InvidualForm /> : <CompanyForm />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

const InvidualForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [agree, setAgree] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      landMark: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      mobile: Yup.string()
        .min(6, "Mobile number seems incorrect")
        .required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string().required("Required"),
      landMark: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (!agree) {
        alert("please agree to pivacy policy to continue");
      } else {
        alert(`recieved all the validated data, click ok to proceed`);
        navigate("/checkyouremail");

        setTimeout(() => {
          const conscent = confirm(
            "click ok to check succefully varified page or click cancle to stay on current page"
          );
          if (conscent) {
            navigate("/successfullyvarified");
          }
        }, 2000);
      }
    },
  });

  return (
    <>
      {step === 1 && (
        <>
          <form id="signup-form" className="w-full flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" titile="Enter name" />
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="surname" titile="Enter surname" />
                <TextField
                  fullWidth
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Enter surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.surname && Boolean(formik.errors.surname)
                  }
                  helperText={formik.touched.surname && formik.errors.surname}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" titile="Enter email" />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="mobile" titile="Enter mobile" />
                <MobileInput
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password" titile="Enter password" />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  placeholder="**********"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="confirmPassword" titile="Confirm password" />
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="**********"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </div>
            </div>
          </form>
          <Button
            fullWidth
            sx={{ textTransform: "none" }}
            variant="contained"
            size="large"
            endIcon={<BsArrowRight />}
            onClick={() => {
              if (
                !formik.errors.name &&
                !formik.errors.surname &&
                !formik.errors.email &&
                !formik.errors.mobile &&
                !formik.errors.password &&
                !formik.errors.confirmPassword
              ) {
                setStep(2);
              } else {
                formik.handleSubmit();
              }
            }}
          >
            Next
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <form id="signup-form" className="w-full flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="landMark" titile="Enter landMark" />
                <TextField
                  fullWidth
                  id="landMark"
                  name="landMark"
                  type="text"
                  placeholder="Enter landMark"
                  value={formik.values.landMark}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.landMark && Boolean(formik.errors.landMark)
                  }
                  helperText={formik.touched.landMark && formik.errors.landMark}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="street" titile="Enter street" />
                <TextField
                  fullWidth
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Enter street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="city" titile="Enter city" />
                <TextField
                  fullWidth
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="state" titile="Enter state" />
                <TextField
                  fullWidth
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="country" titile="Enter country" />
                <TextField
                  fullWidth
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="zip" titile="Enter zip" />
                <TextField
                  fullWidth
                  id="zip"
                  name="zip"
                  type="number"
                  placeholder="Enter zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  error={formik.touched.zip && Boolean(formik.errors.zip)}
                  helperText={formik.touched.zip && formik.errors.zip}
                />
              </div>
            </div>
          </form>
          <Button
            fullWidth
            sx={{ textTransform: "none" }}
            variant="contained"
            size="large"
            endIcon={<BsArrowRight />}
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </>
      )}

      <div className="flex w-full">
        <label htmlFor="" className=" flex gap-2 label">
          <input
            type="checkbox"
            className="checkbox checkbox-info text-white"
            checked={agree}
            onChange={() => {
              setAgree((state) => (state === false ? true : false));
            }}
          />
          <span>
            By signing up, I agree to the Privacy Policy and Terms of Service.
          </span>
        </label>
      </div>
    </>
  );
};

const CompanyForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [agree, setAgree] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      companyName: "",
      taxNumber: "",
      password: "",
      confirmPassword: "",
      landMark: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      mobile: Yup.string()
        .min(6, "Mobile number seems incorrect")
        .required("Required"),
      companyName: Yup.string().required("Required"),
      taxNumber: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string().required("Required"),
      landMark: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (!agree) {
        alert("please agree to pivacy policy to continue");
      } else {
        alert(`recieved all the validated data, click ok to proceed`);
        navigate("/checkyouremail");
        setTimeout(() => {
          const conscent = confirm(
            "click ok to check succefully varified page or click cancle to stay on current page"
          );
          if (conscent) {
            navigate("/successfullyvarified");
          }
        }, 2000);
      }
    },
  });

  return (
    <>
      {step === 1 && (
        <>
          <form id="signup-form" className="w-full flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" titile="Enter name" />
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="surname" titile="Enter surname" />
                <TextField
                  fullWidth
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Enter surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.surname && Boolean(formik.errors.surname)
                  }
                  helperText={formik.touched.surname && formik.errors.surname}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" titile="Enter email" />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="mobile" titile="Enter mobile" />
                <MobileInput
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="companyName" titile="Enter company name" />
                <TextField
                  fullWidth
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Apple"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.companyName &&
                    Boolean(formik.errors.companyName)
                  }
                  helperText={
                    formik.touched.companyName && formik.errors.companyName
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="taxNumber" titile="Enter Tax Number " />
                <TextField
                  fullWidth
                  id="taxNumber"
                  name="taxNumber"
                  type="text"
                  placeholder="46GDH46GGH"
                  value={formik.values.taxNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.taxNumber && Boolean(formik.errors.taxNumber)
                  }
                  helperText={
                    formik.touched.taxNumber && formik.errors.taxNumber
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password" titile="Enter password" />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  placeholder="**********"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="confirmPassword" titile="Confirm password" />
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="**********"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </div>
            </div>
          </form>
          <Button
            fullWidth
            sx={{ textTransform: "none" }}
            variant="contained"
            size="large"
            endIcon={<BsArrowRight />}
            onClick={() => {
              if (
                !formik.errors.name &&
                !formik.errors.surname &&
                !formik.errors.email &&
                !formik.errors.mobile &&
                !formik.errors.companyName &&
                !formik.errors.mobile &&
                !formik.errors.password &&
                !formik.errors.confirmPassword
              ) {
                setStep(2);
              } else {
                formik.handleSubmit();
              }
            }}
          >
            Next
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <form id="signup-form" className="w-full flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="landMark" titile="Enter landMark" />
                <TextField
                  fullWidth
                  id="landMark"
                  name="landMark"
                  type="text"
                  placeholder="Enter landMark"
                  value={formik.values.landMark}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.landMark && Boolean(formik.errors.landMark)
                  }
                  helperText={formik.touched.landMark && formik.errors.landMark}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="street" titile="Enter street" />
                <TextField
                  fullWidth
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Enter street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="city" titile="Enter city" />
                <TextField
                  fullWidth
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="state" titile="Enter state" />
                <TextField
                  fullWidth
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="country" titile="Enter country" />
                <TextField
                  fullWidth
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="zip" titile="Enter zip" />
                <TextField
                  fullWidth
                  id="zip"
                  name="zip"
                  type="number"
                  placeholder="Enter zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  error={formik.touched.zip && Boolean(formik.errors.zip)}
                  helperText={formik.touched.zip && formik.errors.zip}
                />
              </div>
            </div>
          </form>
          <Button
            fullWidth
            sx={{ textTransform: "none" }}
            variant="contained"
            size="large"
            endIcon={<BsArrowRight />}
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </>
      )}

      <div className="flex w-full">
        <label htmlFor="" className=" flex gap-2 label">
          <input
            type="checkbox"
            className="checkbox checkbox-info text-white"
            checked={agree}
            onChange={() => {
              setAgree((state) => (state === false ? true : false));
            }}
          />
          <span>
            By signing up, I agree to the Privacy Policy and Terms of Service.
          </span>
        </label>
      </div>
    </>
  );
};
