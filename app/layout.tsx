import type { Metadata } from "next";
import { inter } from './lib/fonts';
import "./globals.css";
import { Identity } from './ui/identity';


export const metadata: Metadata = {
  title: 'Chris Carter',
  description: 'Portfolio for showcasing software projects',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/fav/favicon-light-256.png',
        href: '/fav/favicon-light-256.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/fav/favicon-dark-256.png',
        href: '/fav/favicon-dark-256.png'
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
      <link
        href="public/fav/favicon-portfolio-light256.png"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="public/fav/favicon-portfolio-dark256.png"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
      </Head> */}
      <body className={`${inter.className} antialiased`} >
        <Identity />
        {children}
      </body>
    </html>
  );
}
