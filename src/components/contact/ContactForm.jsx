import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../../data/form.js";
import { useCaptcha } from "../../hooks/useCaptcha";
import { useTimer } from "../../hooks/useTimer";
export default function ContactForm() {
  const formRef = useRef(); // Create a ref for the form
  const [submitting, setSubmitting] = useState(false);

  const { captchaValue, generateCaptcha } = useCaptcha();

  const { timer, startTimer } = useTimer(generateCaptcha);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.captcha !== captchaValue) {
        alert("Captcha is incorrect!");
        return;
      }
      setSubmitting(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAIL_USER_ID
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSubmitting(false);
            resetForm();
            startTimer(60); // Start countdown for 60 seconds
            generateCaptcha(); // Generate new captcha after successful submission
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  });

  return (
    <form
      ref={formRef}
      className="ml-auo space-y-4"
      onSubmit={formik.handleSubmit}
    >
      <input
        disabled={timer > 0} // Disable input if timer is active
        type="text"
        id="name"
        placeholder="Name"
        name="name"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#197049]"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && Boolean(formik.errors.name) && (
        <p className="text-red-500 text-xs px-1.5">
          {formik.touched.name && formik.errors.name}
        </p>
      )}

      <input
        disabled={timer > 0} // Disable input if timer is active
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#197049]"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && Boolean(formik.errors.email) && (
        <p className="text-red-500 text-xs px-1.5">
          {formik.touched.email && formik.errors.email}
        </p>
      )}
      <input
        disabled={timer > 0} // Disable input if timer is active
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        value={formik.values.subject} // Add value for subject
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#197049]"
      />
      {formik.touched.subject && Boolean(formik.errors.subject) && (
        <p className="text-red-500 text-xs px-1.5">
          {formik.touched.subject && formik.errors.subject}
        </p>
      )}
      <textarea
        placeholder="Message"
        name="message"
        id="message"
        rows="6"
        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#197049] resize-none"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.message && Boolean(formik.errors.message) && (
        <p className="text-red-500 text-xs px-1.5">
          {formik.touched.message && formik.errors.message}
        </p>
      )}
      <div className="flex items-center">
        <p className="mr-2">Captcha: {captchaValue}</p>
        <button
          type="button"
          onClick={generateCaptcha}
          className="text-xs underline"
        >
          Refresh Captcha
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter Captcha"
        id="captcha"
        name="captcha"
        value={formik.values.captcha}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#197049]"
        disabled={timer > 0}
      />
      {formik.touched.captcha && Boolean(formik.errors.captcha) && (
        <p className="text-red-500 text-xs px-1.5">{formik.errors.captcha}</p>
      )}
      <button
        type="submit"
        className={`${
          submitting || timer > 0
            ? "bg-gray-500"
            : "bg-[#197049] hover:bg-blue-600"
        } text-white font-semibold rounded-md text-sm px-4 py-2.5 w-full`}
        disabled={submitting || timer > 0} // Disable button when submitting or timer is active
      >
        {submitting ? "Submitting..." : timer > 0 ? `Wait ${timer}s` : "Send"}
      </button>
    </form>
  );
}
