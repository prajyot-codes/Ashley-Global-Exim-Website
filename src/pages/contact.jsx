import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_623qtr3",
        "template_g0etjl5",
        form.current,
        "R12Vjv3kiTBcTb34E"
      )
      .then(
        (result) => {
          console.log("Email to office:", result.text);

          emailjs
            .sendForm(
              "service_623qtr3",
              "template_fr4qlk9",
              form.current,
              "R12Vjv3kiTBcTb34E"
            )
            .then(
              (result) => {
                console.log("Confirmation email to user:", result.text);
                alert("Message sent successfully and confirmation email sent to you!");
                form.current.reset();
              },
              (error) => {
                console.error("Error sending confirmation to user:", error.text);
                alert("Message sent to office, but failed to send confirmation to you.");
              }
            );
        },
        (error) => {
          console.error("Error sending email to office:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-green-700">Contact Us</h1>
          <p className="text-gray-600">
            Get in touch with our team for inquiries and quotes.
          </p>
          <div className="w-20 h-1 mx-auto mt-2 rounded-full bg-green-300"></div>
        </div>

        <div className="bg-gray-100 border border-gray-200 rounded-xl px-8 py-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="user_email"
              >
                Your Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user_email"
                name="user_email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Subject / Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* hidden time field */}
            <input type="hidden" name="time" />

            <div className="flex justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
