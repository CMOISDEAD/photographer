import { motion as m, useScroll, useSpring, useTransform } from "framer-motion"
import { Link } from "@nextui-org/react"

import { socials } from "../../utils/socials";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
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
    <footer className="h-screen mt-16 px-5 pt-20 pb-5 flex flex-col justify-between">
      <div className="overflow-hidden h-fit py-2">
        <m.h3 style={{ y: ySpring, opacity: opacitySpring }} className="font-lora text-7xl md:text-9xl uppercase font-bold">Contact</m.h3>
      </div>
      <div className="w-full flex gap-4 justify-between items-end">
        <div className="text-default-500">
          <p className="text-md md:text-lg">Angeles Vargas, 2024</p>
          <p className="text-xs md:text-sm">
            angeles@email.com
          </p>
        </div>
        <m.ul
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
