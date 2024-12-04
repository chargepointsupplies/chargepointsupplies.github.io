import MainHeader from '@/components/main-header/main-header';
import './globals.css';
//hola
export const metadata = {
  title: 'ChargePoint Supplies',
  description: 'Small phone accessories and electronics suppplies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
