import { Main } from '../components/layout/background';
import { Footer } from '../components/layout/footer';
import { StyledComponentsRegistry } from './registry';
import { Poppins } from 'next/font/google';
import { GlobalStyle } from './registry';

// import '../components/asset/base-modal.css';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle fontFamily={poppins.style.fontFamily} />
        <html lang={'en'}>
          <body>
            <Main>
              {children}
              <Footer />
            </Main>
          </body>
        </html>
      </StyledComponentsRegistry>
    </>
  );
}
