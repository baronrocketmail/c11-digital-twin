import localFont from '@next/font/local';
import './globals.css'
import {myFont} from "./myFont";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
    return (
            <html lang="en" className={myFont.className}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>{children}</body>
            </html>
            );
}
