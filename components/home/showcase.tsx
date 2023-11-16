"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import HeroPictureDark from "../../public/images/DevMgrDark.png"
import HeroPictureWhite from "../../public/images/DevMgrWhite.png"
import AppWindow from "../ui/window"

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

const ShowcaseItems = [
  {
    title: "Cihaz Yöneticisi",
    description:
      "Cihaz yöneticimizi kullanarak sunucularınızı ve istemcilerinizi uzaktan detaylı şekilde yönetebilirsiniz.",
    content: (
      <>
        <Image
          src={HeroPictureWhite}
          className="block dark:hidden"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
        <Image
          src={HeroPictureDark}
          className="hidden dark:block"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
      </>
    ),
  },
  {
    title: "Yazılım Yöneticisi",
    description:
      "Yazılım yöneticimizi kullanarak sunucularınızda bulunan yazılımları uzaktan yönetebilirsiniz.",
    content: (
      <>
        <Image
          src={HeroPictureWhite}
          className="block dark:hidden"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
        <Image
          src={HeroPictureDark}
          className="hidden dark:block"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
      </>
    ),
  },
  {
    title: "Ağ Yöneticisi",
    description:
      "Ağ yöneticimizi kullanarak ağ cihazlarınızı uzaktan yönetebilirsiniz.",
    content: (
      <>
        <Image
          src={HeroPictureWhite}
          className="block dark:hidden"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
        <Image
          src={HeroPictureDark}
          className="hidden dark:block"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
      </>
    ),
  },
  {
    title: "Yazıcı Yöneticisi",
    description:
      "Yazıcı yöneticimizi kullanarak yazıcılarınızı uzaktan yönetebilirsiniz.",
    content: (
      <>
        <Image
          src={HeroPictureWhite}
          className="block dark:hidden"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
        <Image
          src={HeroPictureDark}
          className="hidden dark:block"
          alt="Liman Merkezi Yönetim Sistemi"
          quality={100}
          placeholder="blur"
          width={1200}
          height={800}
        />
      </>
    ),
  },
]

export default function Showcase() {
  const [active, setActive] = useState(0)

  return (
    <motion.div variants={variants} initial="in" animate="inactive" exit="out">
      <section
        id="showcase"
        className="relative overflow-hidden border-t bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pb-28 pt-20 sm:py-32"
      >
        <ShowcaseGradient />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col items-center justify-center md:mx-auto md:text-center xl:max-w-none">
            <h2
              className={cn(
                "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-heading text-3xl text-transparent sm:text-4xl md:text-5xl",
                fontHeading.variable
              )}
            >
              Eklentilerimiz
            </h2>
            <p className="mt-6 max-w-4xl text-lg font-medium tracking-tight text-muted-foreground">
              Liman Merkezi Yönetim Sistemi&apos;nin genişletilebilir yapısı
              sayesinde birçok eklenti geliştirilmiştir. Bu eklentileri
              kullanarak Liman&apos;ı istediğiniz gibi genişletebilirsiniz.
              HAVELSAN A.Ş. olarak geliştirdiğimiz öne çıkan eklentiler
              aşağıdadır.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div className="relative flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                {ShowcaseItems.map((item, i) => (
                  <ShowcaseMenuItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    active={i === active}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative z-20 -ml-1 mt-10 w-[45rem] shadow-xl shadow-blue-900/10 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                <AppWindow>{ShowcaseItems[active].content}</AppWindow>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function ShowcaseMenuItem({
  title,
  description,
  active,
  onClick,
}: {
  title: string
  description: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <div
      className={cn(
        "group relative px-4 py-1 transition-all lg:p-6",
        active &&
          "rounded-full bg-foreground lg:rounded-l-xl lg:rounded-r-none lg:bg-accent/50 lg:ring-1 lg:ring-inset lg:ring-foreground/10",
        !active && "hover:rounded-l-xl hover:bg-accent/30"
      )}
      onClick={onClick}
    >
      <h3>
        <button
          className={cn(
            "ui-not-focus-visible:outline-none font-heading text-lg font-semibold tracking-wide",
            fontHeading.variable
          )}
          type="button"
        >
          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
          {title}
        </button>
      </h3>
      <p className="mt-2 hidden text-sm text-muted-foreground lg:block">
        {description}
      </p>
    </div>
  )
}

function ShowcaseGradient() {
  return (
    <svg
      width={608}
      height={535}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-[-5rem]"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#60A5FA" stopOpacity={0} offset="0%" />
          <stop stopColor="#F472B6" offset="100%" />
        </linearGradient>
        <filter
          x="-37.5%"
          y="-37.5%"
          width="175%"
          height="175%"
          filterUnits="objectBoundingBox"
          id="b"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
      </defs>
      <circle
        filter="url(#b)"
        cx={304}
        cy={223}
        r={200}
        fill="url(#a)"
        fillRule="evenodd"
        fillOpacity=".32"
      />
    </svg>
  )
}
