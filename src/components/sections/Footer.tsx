import { motion as m, useScroll, useSpring, useTransform } from "motion/react"
import { Link } from "@nextui-org/react"

import { socials } from "../../utils/socials";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const duration = 0.2

export const Footer = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [1000, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const ySpring = useSpring(y, { duration })
  const opacitySpring = useSpring(opacity, { duration })

  return (
    <footer id="contact" className="h-screen mt-16 px-5 pt-20 pb-5 flex flex-col justify-between">
      <div className="overflow-hidden h-fit py-2">
        <m.h3 style={{ y: ySpring, opacity: opacitySpring }} className="font-lora text-6xl md:text-9xl uppercase font-bold">Contacto</m.h3>
      </div>
      <div className="w-full flex gap-4 justify-between items-end">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Angeles Vargas, {new Date().getFullYear()}</p>
          <p className="text-xl sd:text-2xl md:text-3xl lg:text-4xl">
            angelesgonzalez5503@gmail.com
          </p>
        </div>
        <m.ul
          className="hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={list}
        >
          {socials.map((social, index) => (
            <m.li key={index} variants={item}>
              <Link href={social.link} target="_blank" rel="noreferrer" className="text-inherit text-lg md:text-2xl flex justify-between gap-2 content-center items-center">
                <social.icon />
                {social.name}
              </Link>
            </m.li>
          ))}
        </m.ul>
      </div>
    </footer>
  )
}
