import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Tap - marketplace',
  description: 'marketplace',
};

const ttCommons = localFont({
  src: '../public/fonts/TTCommons-Regular.ttf',
  variable: '--font-tt',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ttCommons.variable}>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
