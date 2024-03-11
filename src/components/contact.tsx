import ContactForm from "./contactForm";
import Socials from "./socials";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-24 flex justify-center items-center bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 max-w-[900px] md:px-0">
        <div className="text-center">
          <h2 className=" text-4xl">Contact me</h2>
          <p className="mt-4">Let's stay in touch.</p>
        </div>
        <ContactForm />
        <div className="mt-12">
          <Socials fillColor="#ffffff" />
        </div>
      </div>
    </div>
  );
}
