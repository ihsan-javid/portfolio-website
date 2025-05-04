"use client";
import Button from "@/components/button";
import "./page.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { socialAccounts } from "@/constants";
import LoadingPage from "@/components/LoadingPage";

export default function Page() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Organization: "",
    Services: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (["Name", "Email", "Message"].includes(name)) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate required fields
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
      isValid = false;
    }

    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required";
      isValid = false;
    } else if (formData.Message.length < 3) {
      newErrors.Message = "Message must be at least 3 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    const newErrors = {};
    let hasError = false;

    if (!formData.Name.trim()) {
      newErrors.Name = "Please enter your name";
      hasError = true;
    }

    if (!formData.Email.trim()) {
      newErrors.Email = "Please enter your email";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Please enter a valid email address";
      hasError = true;
    }

    if (!formData.Message.trim()) {
      newErrors.Message = "Please enter your message";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    setSubmitStatus({
      submitted: true,
      success: false,
      message: "Submitting...",
    });

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    // Backend validation
    const formDataObj = Object.fromEntries(formDataToSend);
    if (!formDataObj.Name || !formDataObj.Email || !formDataObj.Message) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: "Please fill in all required fields",
      });
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycby6OtFzov66XYady1wnWVh1tYqMYQGWoa8UOy87aGEbNCiHDgyHh5lM2JGyk4KxPye6/exec",
      {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      }
    )
      .then(() => {
        console.log("Form submitted");
        setSubmitStatus({
          submitted: true,
          success: true,
          message: "Request submitted",
        });

        // Reset form
        setFormData({
          Name: "",
          Email: "",
          Organization: "",
          Services: "",
          Message: "",
        });

        // Remove success message after 3 seconds
        setTimeout(() => {
          setSubmitStatus({
            submitted: false,
            success: false,
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        });
      });
      
  useEffect(() => {
    LoadingPage();
  }, []);
  };
  return (
    <div data-scroll-section>
      <section className="common-padding w-screen h-auto">
        <div className="pt-10 lg:pl-20 px-4 text-black font-inter">
          <h1 className="flex flex-col leading-16 font-mediaSans lg:text-6xl max-sm:text-4xl sm:text-6xl pt-10">
            <span>Let's start a </span>
            <span>project together</span>
          </h1>
          <div className="mx-auto lg:w-2/3 w-full">
            <form onSubmit={handleSubmit} className="w-full mt-20">
              {[
                {
                  label: "What's your name?",
                  name: "Name",
                  placeholder: "John Doe *",
                  required: true,
                },
                {
                  label: "Email",
                  name: "Email",
                  placeholder: "john@doe.com *",
                  required: true,
                },
                {
                  label: "What's the name of your organization?",
                  name: "Organization",
                  placeholder: "John & Doe ®",
                },
                {
                  label: "What services are you looking for?",
                  name: "Services",
                  placeholder: "Web Design, Web Development ...",
                },
                {
                  label: "Your message",
                  name: "Message",
                  placeholder: "Hello Ihsan, can you help me with ... *",
                  isTextarea: true,
                  required: true,
                },
              ].map((field, index) => (
                <div className="input-box" key={index}>
                  <hr />
                  <div className="box my-10 md:my-20">
                    <p>{String(index + 1).padStart(2, "0")}</p>
                    <div className="flex flex-col w-full">
                      <label htmlFor={field.name}>{field.label}</label>
                      {field.isTextarea ? (
                        <textarea
                          name={field.name}
                          id={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="focus:outline-none resize-none"
                        />
                      ) : (
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full p-2 rounded"
                        />
                      )}
                      {field.required && errors[field.name] && (
                        <div className="flex gap-4 relative -left-6 items-center">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          <p className="text-red-600 opacity-100 text-sm mt-1">
                            {errors[field.name]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <Button type="submit" className="border-btn !border-black my-20">
                {submitStatus.submitted && !submitStatus.success
                  ? "Sending..."
                  : "Send"}
              </Button>

              {submitStatus.submitted && submitStatus.success && (
                <div className="flex gap-4 relative -left-6 items-center">
                  <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-green-600 opacity-100 text-sm mt-1">
                    Request Submitted
                  </p>
                </div>
              )}

              {submitStatus.submitted &&
                !submitStatus.success &&
                submitStatus.message !== "Submitting..." && (
                  <div className="flex gap-4 relative -left-6 items-center">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    <p className="text-red-600 opacity-100 text-sm mt-1">
                      {submitStatus.message}
                    </p>
                  </div>
                )}

              {Object.keys(errors).map(
                (fieldName) =>
                  errors[fieldName] && (
                    <div
                      key={fieldName}
                      className="flex gap-4 relative -left-6 items-center"
                    >
                      <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                      <p className="text-red-600 opacity-100 text-sm mt-1">
                        {errors[fieldName]}
                      </p>
                    </div>
                  )
              )}
            </form>
          </div>
        </div>

        <div className="max-sm:mt-25">
          <div className="flex justify-between max-sm:flex-col max-sm:gap-3 w-full">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-[2vh] sm:text-[1vw] opacity-70">
                version
              </p>
              <p>2025 © Edition</p>
            </div>
            <hr className="block sm:hidden" />
            <div>
              <p className="uppercase text-[2vh] sm:text-[1vw] opacity-70">
                socials
              </p>
              <div className="h-10 flex gap-4 items-center">
                {socialAccounts.map((account) => {
                  return (
                    <Link
                      href={account.url}
                      className="footer-link"
                      key={account.id}
                    >
                      {account.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
