import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { LoadingProvider, useLoading } from "~/context/loadingContext";
import { ErrorProvider } from "~/context/errorContext";

const GlobalLoadingIndicator = () => {
  const { isLoading } = useLoading();

  return isLoading ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-xl">Yükleniyor...</div>
    </div>
  ) : null;
};

import "./tailwind.css";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [{ title: "Remix Product List" }];
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <LoadingProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>

        <body>
          <GlobalLoadingIndicator />
          <header className="bg-gray-100 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-xl font-bold">Ürün Listesi App</div>

              <nav className="hidden md:flex space-x-6">
                <ul className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                  <Link to="/productList">
                    <p className={"text-black py-2 px-4 hover:text-white"}>
                      Anasayfa
                    </p>
                  </Link>
                </ul>
                <ul className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                  <Link to="/productList">
                    <p className={"text-black py-2 px-4 hover:text-white"}>
                      Ürünler
                    </p>
                  </Link>
                </ul>
                <ul className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                  <Link to="/productList">
                    <p className={"text-black py-2 px-4 hover:text-white"}>
                      Giriş Yap
                    </p>
                  </Link>
                </ul>
              </nav>

              <button
                onClick={toggleMenu}
                className="md:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-gray-500 rounded-full"></span>
                  <span className="block w-6 h-0.5 bg-gray-500 rounded-full"></span>
                  <span className="block w-6 h-0.5 bg-gray-500 rounded-full"></span>
                </div>
              </button>
            </div>

            {isMenuOpen && (
              <nav className="md:hidden bg-gray-100">
                <ul className="space-y-2 p-4">
                  <li className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                    <Link to="/productList">
                      <p className={"text-black py-2 px-4 hover:text-white"}>
                        Anasayfa
                      </p>
                    </Link>
                  </li>
                  <li className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                    <Link to="/productList">
                      <p className={"text-black py-2 px-4 hover:text-white"}>
                        Ürünler
                      </p>
                    </Link>
                  </li>
                  <li className="rounded-xl bg-white hover:bg-gray-500 hover:shadow-lg hover:scale-105 transition duration-300">
                    <Link to="/productList">
                      <p className={"text-black py-2 px-4 hover:text-white"}>
                        Giriş Yap
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </header>
          <main>
            <ErrorProvider>
              <Outlet />
            </ErrorProvider>
          </main>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </LoadingProvider>
  );
}
