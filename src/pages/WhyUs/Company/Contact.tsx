import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // TODO: connect backend / email service
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">

        <h1 className="text-5xl md:text-6xl font-sans leading-tight max-w-3xl">
          Talk to us.{" "}
          <span className="text-[#009689]">
            We actually reply.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Have a question, need a demo, or just curious? Reach out.
        </p>
      </section>

      {/* MAIN */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div className="border rounded-xl p-8">
            <h2 className="text-lg font-semibold mb-6">Send a message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]/40"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]/40"
                  placeholder="Tell us what you need..."
                />
              </div>

              <Button
                type="submit"
                className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#009689] hover:bg-[#007d72] text-white h-11 rounded-lg text-sm font-sans"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-[#009689]" />
                <h3 className="font-sans">Email</h3>
              </div>
              <p className="text-sm text-gray-500">
                support@yourdomain.com
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-[#009689]" />
                <h3 className="font-sans">Phone</h3>
              </div>
              <p className="text-sm text-gray-500">
                +91 98765 43210
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-[#009689]" />
                <h3 className="font-sans">Office</h3>
              </div>
              <p className="text-sm text-gray-500">
                Remote-first team, distributed globally
              </p>
            </div>

            <div className="bg-[#f6fffd] border rounded-xl p-6">
              <p className="text-sm text-gray-600">
                Prefer a quick chat? We can set up a demo and walk you through everything.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;