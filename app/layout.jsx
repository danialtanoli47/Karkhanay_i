import "@styles/globals.css";

import Nav from "@components/Nav";

import Provider from "@components/Provider";

export const metadata = {
  title: "Karkhanay",
  description: "One stop for all your sourcing needs.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/icons/logo.svg" />
      </head>
      {/**noSelect class to disable highlight of elements on click */}
      <body className="noSelect">
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <section className="w-full flex-center flex-col ">
              <Nav />
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
