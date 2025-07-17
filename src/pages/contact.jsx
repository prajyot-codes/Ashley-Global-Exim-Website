import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_7mfeepd",
        "template_g0etjl5", // office email template
        form.current,
        "R12Vjv3kiTBcTb34E"
      )
      .then(
        (result) => {
          console.log("Email to office:", result.text);
          setIsLoading(false);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Error sending email to office:", error.text);
          setIsLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block p-2 sm:p-3 rounded-full bg-[#2e7d32] mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2e7d32] ">
            Let's Connect
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            We'd love to hear from you! Drop us a message and we'll get back to you as soon as possible.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto mt-4 rounded-full bg-green-500 animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Contact Info Section */}
          

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center space-x-2 animate-bounce">
                <svg className="w-5 h-5 bg-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-800 font-medium">Message sent successfully!</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="What's this about?"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <input type="hidden" name="time" />

              <div className="flex justify-center pt-4">
                <button
                  className="group relative px-6 py-2 sm:px-8 sm:py-3 bg-[#2e7d32] text-white font-semibold rounded-xl hover: focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center space-x-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending…</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
