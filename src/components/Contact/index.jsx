"use client";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import swal from "sweetalert";

const Contact = () => {
 

  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null); 

  const validateForm = (formData) => {
  const { name, email, message } = formData;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return 'All fields are required.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  }

  return null; // No error
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage(null);

  const form = formRef.current;
  const formData = {
    name: form?.name?.value,
    email: form?.email?.value,
    message: form?.message?.value,
  };

  const validationError = validateForm(formData);
  if (validationError) {
    setMessage(validationError);
    setIsSubmitting(false);
    return;
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.status === 201) {
        setMessage("✅ Email sent successfully!");
        swal({
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out. Your message has been received and we will get back to you soon. We appreciate your interest",
          icon: "success",
        })
        form.reset();
      } else {
        setMessage("❌ Email failed to send.");
        swal({
          title: "Oops! Something Went Wrong",
          text: "We're sorry, but your message couldn't be sent at this time.",
          icon: "warning",
        })
      }
  } catch (err) {
    console.error('Form error:', err);
    setMessage('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="overflow-hidden py-16 px-7 md:p-10 lg:p-20 bg-blue-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 flex lg:flex-row flex-col lg:gap-8">
            <div className="w-full">
      
              <p className="text-sm text-[#4CA1FF] mb-2">Contact Us</p>
              <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
                Partner with us for
                <br /> Innovation
              </h2>
              <p className="mb-10 text-base text-gray-medium">
                Have a question or a project in mind? Reach out - we're here to
                help you build innovative solutions that drive success.
              </p>
            </div>

    

            <div
              className="mb-12 rounded-4xl bg-[#192539] p-6 lg:p-8 lg:mb-5"
              data-wow-delay=".15s"
            >
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4 sm:mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4 sm:mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                      />
                    </div>
                  </div>

                  
                  <div className="w-full px-4">
                    <div className="mb-4 sm:mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Enter your Message"
                        className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                      ></textarea>
                    </div>
                  </div>

            
                    <div className="w-full px-4">
                    <button
                      type="submit"
                      className="flex items-center gap-[3px] bg-blue text-white md:text-base text-sm font-inter tracking-tighter md:py-3 md:px-6 py-2 px-4 rounded-full cursor-pointer hover:bg-opacity-90 transition duration-300 ease-in-out font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                      <ChevronRight
                        strokeWidth={2}
                        className="lg:w-6 lg:h-6 h-5 w-5 mt-[0.5px]"
                      />
                    </button>
                  </div>
                  
                  
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
