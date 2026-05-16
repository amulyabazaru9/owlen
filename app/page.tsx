"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
} from "framer-motion";

export default function Home() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 50,
    stiffness: 300,
  });

  const smoothY = useSpring(mouseY, {
    damping: 50,
    stiffness: 300,
  });

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX - 100);
    mouseY.set(e.clientY - 100);
  }

  return (
    <>

      {/* INTRO LOADER */}
      <AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.6em" }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:text-6xl uppercase text-white"
            >
              OWLEN
            </motion.h1>

          </motion.div>
        )}

      </AnimatePresence>

      <main
        onMouseMove={handleMouseMove}
        className="relative bg-black text-white overflow-x-hidden"
      >

        {/* Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-white z-[9999]"
          style={{ scaleX }}
        />

        {/* Cursor Glow */}
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[999] h-[200px] w-[200px] rounded-full bg-white/10 blur-3xl"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between backdrop-blur-md bg-black/10 border-b border-white/10">

          <h1 className="text-lg tracking-[0.5em] uppercase font-semibold">
            OWLEN
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-gray-300">

            <a
              href="#philosophy"
              className="hover:text-white transition"
            >
              Philosophy
            </a>

            <a
              href="#craftsmanship"
              className="hover:text-white transition"
            >
              Craftsmanship
            </a>

            <a
              href="#movement"
              className="hover:text-white transition"
            >
              Movement
            </a>

          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden">

          {/* Animated Background */}
          <motion.div
            initial={{ scale: 1.1, y: 0 }}
            animate={{ scale: 1, y: -20 }}
            transition={{ duration: 4 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/owl.jpg"
              alt="OWLEN Owl"
              fill
              priority
              className="object-cover object-center opacity-60"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-[0.6em] uppercase">
              OWLEN
            </h1>

            <p className="mt-6 text-sm md:text-lg tracking-[0.3em] uppercase text-gray-300">
              Crafted for the unseen
            </p>

            <button className="mt-12 border border-white px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500">
              Explore Collection
            </button>
          </motion.div>
        </section>

        {/* THE UNSEEN SECTION */}
        <section
          id="philosophy"
          className="relative min-h-screen flex items-center justify-center px-6 py-48 border-t border-white/10"
        >

          {/* Background Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/maskedowl.jpg"
              alt="Masked Owl"
              fill
              className="object-cover object-top opacity-55"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl text-center"
          >
            <p className="text-gray-500 uppercase tracking-[0.4em] text-sm mb-8">
              The Unseen
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-[1.4]">
              Built for those who observe before they speak.
            </h2>
          </motion.div>
        </section>

        {/* FABRIC SECTION */}
        <section
          id="craftsmanship"
          className="relative min-h-screen flex items-center justify-center px-6 py-48 border-t border-white/10"
        >

          {/* Background Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/fabric.jpg"
              alt="Fabric"
              fill
              className="object-cover opacity-65"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl text-center"
          >
            <p className="text-gray-500 uppercase tracking-[0.4em] text-sm mb-8">
              Craftsmanship
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-[1.4]">
              Every fold carries intention.
            </h2>
          </motion.div>
        </section>

        {/* HALLWAY TRANSITION */}
        <section className="relative h-screen w-full overflow-hidden border-t border-white/10">

          <Image
            src="/images/hallway.jpg"
            alt="Hallway"
            fill
            className="object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/50"></div>

        </section>

        {/* MOVEMENT SECTION */}
        <section
          id="movement"
          className="relative min-h-screen flex items-center justify-center px-6 py-48 border-t border-white/10 overflow-hidden"
        >

          {/* Background Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/motion.jpg"
              alt="Motion"
              fill
              className="object-cover opacity-40"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl text-center"
          >

            <p className="text-gray-500 uppercase tracking-[0.4em] text-sm mb-8">
              Movement
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-[1.4]">
              Silence still leaves a trace.
            </h2>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-white/10 px-6 py-24 text-center">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl md:text-5xl tracking-[0.5em] uppercase mb-8">
              OWLEN
            </h2>

            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs md:text-sm">
              Crafted for the unseen
            </p>

            <div className="mt-12 flex justify-center gap-8 text-gray-400 text-sm uppercase tracking-[0.2em]">

              <a href="#" className="hover:text-white transition">
                Instagram
              </a>

              <a href="#" className="hover:text-white transition">
                Contact
              </a>

            </div>

            <p className="mt-16 text-gray-600 text-xs tracking-[0.2em] uppercase">
              © 2026 OWLEN. All Rights Reserved.
            </p>

          </motion.div>
        </footer>

        {/* Grain Overlay */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.06] z-[999]"
          style={{
            backgroundImage: "url('/images/grain.png')",
          }}
        ></div>

      </main>
    </>
  );
}