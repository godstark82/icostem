import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '../components/LayoutWrapper';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SIMDTE 2025',
  description: 'International Conference on Simulation, Modeling and Optimization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}