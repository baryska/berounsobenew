import Script from 'next/script';
import { Header } from './Header';
import Consent from '../../components/Consent/Consent';
import TopBanner from '../../components/TopBanner/TopBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <TopBanner />
      <Header />
      <Script data-domain="berounsobe.eu" src="https://www.google-analytics.com/analytics.js" />
      <main>{children}</main>
      <Consent />
    </div>
  );
};