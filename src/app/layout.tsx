import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "George Portfolio",
  description: "George is a software engineer who loves to build web applications.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider></body>
      </html>
  );
}
