"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500">
      <div className="flex flex-col h-screen ">
        <header className="bg-white shadow-sm dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <nav className="flex items-center justify-between h-14 space-x-3 p-2">
              <Link
                className="flex items-center space-x-2 font-semibold"
                href="#"
              >
                <span className="rounded-full bg-gray-900 w-8 h-8" />
                <span className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                  Mim Harrison{" "}
                </span>
              </Link>
              <div className="hidden space-x-6 md:flex">
                <Link
                  className="flex items-center text-sm font-medium tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
                  href="#"
                >
                  About Mim
                </Link>
                <Link
                  className="flex items-center text-sm font-medium tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
                  href="#"
                >
                  Books
                </Link>
                <Link
                  className="flex items-center text-sm font-medium tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
                  href="#"
                >
                  Events
                </Link>
                <Link
                  className="flex items-center text-sm font-medium tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
                  href="#"
                >
                  Blog
                </Link>
                <Link
                  className="flex items-center text-sm font-medium tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
                  href="#"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center space-x-4 md:hidden">
                <button className="rounded-md p-2 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950">
                  <MenuIcon className="w-6 h-6" />
                  <span className="sr-only">Toggle Menu</span>
                </button>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <div className="flex flex-col items-center justify-center space-y-6 py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A website for word lovers
                </h1>
                <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the magic of words with Mim Harrison
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-6">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  New Releases
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Just out of the oven.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Image
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height={350}
                    src="/images/mimi1.jpg"
                    width={250}
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      Words at Work
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height="350"
                    src="/images/mimi2.jpg"
                    width="250"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      Smart Words
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height="350"
                    src="/images/mimi3.jpg"
                    width="250"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      Wicked Good Words
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="py-6"> */}
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bestsellers
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Fan favorites.
                </p> */}
              {/* </div>
              <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <img
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height="350"
                    src="/placeholder.svg"
                    width="250"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      The Enchanted Dictionary
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height="350"
                    src="/placeholder.svg"
                    width="250"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      The Enchanted Dictionary
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    alt="Cover"
                    className="aspect-[4/6] overflow-hidden rounded-lg object-cover object-center"
                    height="350"
                    src="/placeholder.svg"
                    width="250"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter">
                      The Enchanted Dictionary
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By Mim Harrison
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 w-full py-6 border-t text-center bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center gap-2 px-4 md:gap-4 md:grid md:grid-cols-3 lg:gap-0 lg:grid-cols-3 xl:px-6">
            <div className="space-y-2 text-sm md:col-start-2 md:text-base lg:col-start-1 lg:space-y-4">
              {/* <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                About Alex
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Books
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Events
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </div>
            <div className="space-y-2 text-sm md:col-start-3 md:text-base lg:col-start-2 lg:space-y-4">
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                FAQ
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Terms
              </Link> */}
            </div>
            <div className="space-y-2 text-sm md:col-start-1 md:text-base lg:col-start-3 lg:space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sign up for the latest news
              </p>
              <form className="flex items-center space-x-4 rounded-md border">
                <Input
                  className="max-w-sm flex-1 text-sm"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="text-xs font-semibold" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function MenuIcon(props: any): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
