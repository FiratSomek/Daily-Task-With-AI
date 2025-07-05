import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { Providers } from "../../store/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <UserProvider> */}
      <body>
        <Providers>{children}</Providers>
      </body>
      {/* </UserProvider> */}
    </html>
  );
}
