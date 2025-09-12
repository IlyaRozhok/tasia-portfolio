import React from "react";
import inst from "../assets/inst.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

interface ContactMethod {
  id: number;
  title: string;
  icon: string;
  value: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "Email",
    icon: email,
    value: "taisiyazhuruk@gmail.com",
    link: "mailto:taisiyazhuruk@gmail.com",
  },
  {
    id: 2,
    title: "Phone",
    icon: phone,
    value: "+38 (095) 172-8136",
    link: "tel:+380951728136",
  },
  {
    id: 3,
    title: "Instagram",
    icon: inst,
    value: "@tttasssia",
    link: "https://www.instagram.com/tttasssia/",
  },
];

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-px bg-primary-500" />
            <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
              Contact
            </span>
            <div className="w-16 h-px bg-primary-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch to discuss your
            project.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={method.title === "Instagram" ? "_blank" : undefined}
              className="group text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  alt={method.title}
                  src={method.icon}
                  className="w-6 h-6 filter invert object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-primary-500 font-medium text-sm break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © 2024 Tasia Model. Professional modeling services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
