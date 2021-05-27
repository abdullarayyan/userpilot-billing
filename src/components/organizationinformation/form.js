// import React, { useState } from "react";
// import { Formik } from "formik";
// import { object, string } from "yup";
//
// import "./style.css";
// const initialValues = {
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
// };
//
// export function Form() {
//     const [formValue, setFormValue] = useState(initialValues);
//     const [isFormSubmited, setIsFormSubmited] = useState(false);
//
//     // validation of the shape
//     const validationSchema = object().shape({
//         name: string()
//             .min(4, "Name must be at least 4 characters")
//             .max(30, "Name should not exceed 30 characters.")
//             .required("Please, provide your name!")
//             .matches(/^(.*)?\S+(.*)?$/, "Field cannot be empty."),
//         email: string()
//             .email("Email must be a valid email")
//             .required("Please, provide your email!")
//             .matches(/^(.*)?\S+(.*)?$/, "Field cannot be empty."),
//         subject: string()
//             .min(2, "Subject should be at least 2 characters.")
//             .max(30, "Subject should not exceed 30 characters.")
//             .required("Please, provide your subject!")
//             .matches(/^(.*)?\S+(.*)?$/, "Field cannot be empty."),
//         message: string()
//             .min(2, "Message should be at least 2 characters.")
//             .max(30, "Message should not exceed 30 characters.")
//             .required("Please, provide your message!")
//             .matches(/^(.*)?\S+(.*)?$/, "Field cannot be empty.")
//     });
//
//     const onSubmit = (values, submitProps) => {
//         setFormValue({ ...values });
//         setIsFormSubmited(true);
//         submitProps.resetForm();
//     };
//
//     if (isFormSubmited)
//         return (
//             <>
//                 <h3 className="formTitle">Form Submited</h3>
//                 <h4>Form Data</h4>
//                 <p>Name: {formValue.name}</p>
//                 <p>Email: {formValue.email}</p>
//                 <p>Subject: {formValue.subject}</p>
//                 <p>Massage: {formValue.message}</p>
//                 {""}
//                 <button
//                     onClick={() => setIsFormSubmited(false)}
//                     className="btn"
//                     type="button"
//                 >
//                     Come back to form
//                 </button>
//             </>
//         );
//
//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             {({
//                   values,
//                   handleSubmit,
//                   errors,
//                   handleChange,
//                   handleBlur,
//                   touched,
//                   handleReset,
//                   dirty
//               }) => (
//                 <>
//                     <h3 className="formTitle">Fill and Submit Form</h3>
//                     <form onSubmit={handleSubmit} className="form">
//                         <label className="label">
//                             <div className="errorTextContainer">
//                                 {errors.name && touched.name && (
//                                     <div className="errorText">{errors.name}</div>
//                                 )}
//                             </div>
//                             <input
//                                 aria-label="input-1"
//                                 className={
//                                     errors.name && touched.name ? "input input--error" : "input"
//                                 }
//                                 type="text"
//                                 placeholder="Name..."
//                                 name="user_name"
//                                 value={values.name}
//                                 onChange={handleChange("name")}
//                                 onBlur={handleBlur("name")}
//                             />
//                         </label>
//                         <label className="label">
//                             <div className="errorTextContainer">
//                                 {errors.email && touched.email && (
//                                     <div className="errorText">{errors.email}</div>
//                                 )}
//                             </div>
//                             <input
//                                 aria-label="input-2"
//                                 className={
//                                     errors.email && touched.email ? "input input--error" : "input"
//                                 }
//                                 type="text"
//                                 placeholder="Email..."
//                                 name="email"
//                                 value={values.email}
//                                 onChange={handleChange("email")}
//                                 onBlur={handleBlur("email")}
//                             />
//                         </label>
//                         <label className="label">
//                             <div className="errorTextContainer">
//                                 {errors.subject && touched.subject && (
//                                     <div className="errorText">{errors.subject}</div>
//                                 )}
//                             </div>
//                             <input
//                                 aria-label="input-3"
//                                 className={
//                                     errors.subject && touched.subject
//                                         ? "input input--error"
//                                         : "input"
//                                 }
//                                 type="text"
//                                 placeholder="Subject..."
//                                 name="subject"
//                                 value={values.subject}
//                                 onChange={handleChange("subject")}
//                                 onBlur={handleBlur("subject")}
//                             />
//                         </label>
//                         <label className="labelTextarea">
//                             <div className="errorTextContainer">
//                                 {errors.message && touched.message && (
//                                     <div className="errorText">{errors.message}</div>
//                                 )}
//                             </div>
//                             <textarea
//                                 aria-label="textarea"
//                                 className={
//                                     errors.message && touched.message
//                                         ? "textarea textarea--error"
//                                         : "textarea"
//                                 }
//                                 placeholder="Type message..."
//                                 name="message"
//                                 value={values.message}
//                                 onChange={handleChange("message")}
//                                 onBlur={handleBlur("message")}
//                             />
//                         </label>
//                         <div className="buttonsContainer">
//                             <button
//                                 className={!dirty ? "resetBtn resetBtn--disabled" : "resetBtn"}
//                                 onClick={handleReset}
//                                 type="reset"
//                             >
//                                 Reset
//                             </button>
//                             <button className="btn" type="submit">
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </>
//             )}
//         </Formik>
//     );
// }
