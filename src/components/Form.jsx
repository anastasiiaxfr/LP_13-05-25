import React, { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { useFormik } from "formik";
import * as Yup from "yup";

const getCountryCode = async () => {
  try {
    const response = await fetch("https://ipapi.co/country/");
    if (!response.ok) {
      throw new Error(`Response not OK: ${response.status}`);
    }
    const countryCode = await response.text();
    console.log("countryCode", countryCode);
    return countryCode;
  } catch (error) {
    console.warn("Fallback to navigator.language due to:", error.message);
  }
};

// URL параметры
const urlParams = new URLSearchParams(window.location.search);

function FormComponent() {
  const [defaultCountry, setDefaultCountry] = useState();
  useEffect(() => {
    const fetchCountry = async () => {
      const countryCode = await getCountryCode();
      //alert(countryCode);
      setDefaultCountry(countryCode);
    };

    fetchCountry();
  }, []);
  console.log("defaultCountry", defaultCountry);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      policy: false,
      pixel: urlParams.get("gl") || "null",
      custom1: "English",
      custom2: "trc",
      custom3: "GG1",
      custom4: urlParams.get("utm_adname") || "null",
      custom5: urlParams.get("utm_placement") || "null",
      custom6: urlParams.get("utm_content") || "null",
      custom7: urlParams.get("acc") || "null",
      custom8: document.body.getAttribute("data-sub") || "null",
      custom9: urlParams.get("token") || "null",
      custom10: urlParams.get("utm_campaign") || "null",
      custom11: urlParams.get("campaign_id") || "null",
      custom12: urlParams.get("adset_name") || "null",
      custom13: urlParams.get("adset_id") || "null",
      custom14: "google",
      custom15: "9200477328",
      offerName: "Profit Path",
      offerWebsite: "https://mnquntrem.com/",
      locale: "null",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Min 3 characters")
        .max(15, "Max 15 characters")
        .required("Required"),
      lastName: Yup.string()
        .min(4, "Min 4 characters")
        .max(20, "Max 20 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Phone is required"),
      policy: Yup.boolean().oneOf([true], "You must accept the policy"),
    }),
    onSubmit: async (values) => {
      //alert(JSON.stringify(values, null, 2));
      try {
        const response = await fetch("./send.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log("Form sent successfully!");
        } else {
          console.error("Error sending form");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form" noValidate>
      {/* Скрытые поля */}
      {Object.entries(formik.initialValues)
        .filter(
          ([key]) =>
            key.startsWith("custom") ||
            key === "pixel" ||
            key === "offerName" ||
            key === "offerWebsite" ||
            key === "locale"
        )
        .map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}

      <div className="form_row">
        <div className="input-block input-block-first-name">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="form-error">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="input-block input-block-last-name">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="form-error">{formik.errors.lastName}</div>
          )}
        </div>
      </div>

      <div className="input-block input-block-email">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="form-error">{formik.errors.email}</div>
        )}
      </div>

      <div className="input-block input-block-phone">
        <label htmlFor="phone">Phone</label>
        {defaultCountry && (
          <PhoneInput
            key={defaultCountry}
            defaultCountry={(defaultCountry || "UK").toLowerCase()}
            value={formik.values.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
            onBlur={() => formik.setFieldTouched("phone", true)}
          />
        )}
        {formik.touched.phone && formik.errors.phone && (
          <div className="form-error">{formik.errors.phone}</div>
        )}
      </div>

      <div className="form_inline">
        <input
          type="checkbox"
          id="policy"
          name="policy"
          onChange={formik.handleChange}
          checked={formik.values.policy}
        />
        <label htmlFor="policy">
          <span>
            By registration I agree and accept {" "}
            <a href="/terms">
              <u>Terms of use</u>
            </a>{" "}
            and {" "}
            <a href="/policy">
              <u>Privacy Policy</u>
            </a>
            .
          </span>
        </label>
      </div>
      {formik.touched.policy && formik.errors.policy && (
        <div className="form-error">{formik.errors.policy}</div>
      )}
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}

export default FormComponent;
