"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Gauge, Menu, Shield, Star, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]
  );

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gold">NEBULA MOTORS</h1>
          </motion.div>
          <nav>
            <button
              className="md:hidden text-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <motion.ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:relative top-full left-0 right-0 md:top-auto bg-black md:bg-transparent p-4 md:p-0`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {["models", "technology", "about", "testimonials", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => smoothScroll(e, `#${item}`)}
                      className="text-gold hover:text-white transition-colors uppercase tracking-wider"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </motion.ul>
          </nav>
        </div>
      </motion.header>

      <main>
        <section
          id="hero"
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <motion.div
            className="text-center z-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Redefining Luxury
              <br />
              in Motion
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Experience unparalleled elegance and innovation
            </p>
            <Button className="bg-gold hover:bg-gold/80 text-black font-semibold py-3 px-8 rounded-none">
              Discover Elegance <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
              alt="Luxurious Nebula car"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        <section id="models" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Our Stellar Fleet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "Nova",
                  image:
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
                  description: "Urban elegance redefined",
                },
                {
                  name: "Quantum",
                  image:
                    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
                  description: "Power meets sophistication",
                },
                {
                  name: "Celestial",
                  image:
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
                  description: "Luxury without limits",
                },
              ].map((model, index) => (
                <motion.div
                  key={index}
                  className="bg-black p-6 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2 text-gold">
                    {model.name}
                  </h4>
                  <p className="text-gray-400 mb-4">{model.description}</p>
                  <Button variant="outline" className="text-black">
                    Explore
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Cutting-Edge Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Quantum Drive",
                  description: "0-60 mph in a breathtaking 2.1 seconds",
                },
                {
                  icon: Shield,
                  title: "Nebula Shield",
                  description: "Advanced AI-powered protective cocoon",
                },
                {
                  icon: Gauge,
                  title: "Infinite Range",
                  description: "800+ miles on a single charge",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-12 h-12 mb-6 text-gold" />
                  <h4 className="text-2xl font-semibold mb-4 text-gold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Nebula Motors Headquarters"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-3xl font-bold mb-6 text-gold">
                  Our Legacy of Excellence
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At Nebula Motors, we are driven by a passion for innovation
                  and a commitment to redefining luxury. Our journey began with
                  a vision to create vehicles that not only push the boundaries
                  of technology but also elevate the driving experience to new
                  heights of sophistication and comfort.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Pioneering sustainable luxury",
                    "Craftsmanship meets cutting-edge technology",
                    "Uncompromising performance and elegance",
                    "Setting new standards in automotive excellence",
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="text-gold mr-2" size={16} />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra R.",
                  role: "CEO, TechCorp",
                  quote:
                    "Nebula Motors has redefined luxury. The Quantum model is not just a car, it's an experience.",
                },
                {
                  name: "Marcus W.",
                  role: "Formula 1 Driver",
                  quote:
                    "The performance of Nebula's vehicles is unmatched. It's like driving the future.",
                },
                {
                  name: "Sophia L.",
                  role: "Environmental Scientist",
                  quote:
                    "Finally, a car that combines sustainability with uncompromising luxury. Nebula is leading the charge.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gold hover:shadow-lg hover:shadow-gold/20 transition-shadow duration-300">
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 20H16L14 28H10L12 20ZM20 20H24L22 28H18L20 20Z"
                            fill="#FFD700"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-300 mb-4 italic text-lg">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 bg-gold rounded-full mr-4"></div>
                        <div>
                          <p className="text-gold font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Experience Nebula
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl mb-8 text-gray-300">
                  Ready to elevate your driving experience? Contact us to
                  schedule your private showcase or learn more about our stellar
                  fleet.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Your message"
                      rows={4}
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury car interior"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gold mb-2">
                NEBULA MOTORS
              </h2>
              <p className="text-sm text-gray-400">
                Elevating the art of mobility
              </p>
            </div>
            <nav className="mb-8 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="ahnaafrafee.vercel.app" className="text-blue-500">
              Ahnaaf Rafee
            </a>
            . All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
