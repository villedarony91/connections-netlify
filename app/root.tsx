import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Disclosure } from '@headlessui/react'
import { PhoneIcon } from '@heroicons/react/24/outline'

import stylesheet from "~/tailwind.css?url";
import LogoSvg from "./assets/LOGO";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const TopBar = () => {
  return (
    <Disclosure as="nav" className="bg-primary-green shadow">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <div className="flex">
            <LogoSvg className="fill-secondary-yellow"/>
        </div>
        <div className="flex items-center">
          <div className="shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 text-secondary-yellow"
            >
              <PhoneIcon aria-hidden="true" className="-ml-0.5 size-5" />
              Cont&aacute;ctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
  )
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <TopBar />
        <Tours />
        <Tours />
        <Footer />
      </body>
    </html>
  );
}
