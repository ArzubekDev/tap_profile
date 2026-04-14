import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import ThemeConfig from '@/src/shared/theme/themeConfig';
import TanstackQueryProvider from '../providers/TanstackQueryProvider';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Tap - marketplace',
  description: 'marketplace',
};

const ttCommons = localFont({
  src: '../assets/fonts/TTCommons-Regular.ttf',
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
        <AntdRegistry>
          <ThemeConfig>
            <TanstackQueryProvider>{children}</TanstackQueryProvider>
          </ThemeConfig>
        </AntdRegistry>
      </body>
    </html>
  );
}
