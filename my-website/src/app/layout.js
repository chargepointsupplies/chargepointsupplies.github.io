import React from "react";
import "./globals.css";
import NavBar from "@/components/nav-bar";

export const metadata = {
  title: "Para Fabian <3",
  description: "Concept Website for Fabian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-500 font-sans">
      

        <NavBar/>
        {children}
      </body>
    </html>
  );
}
