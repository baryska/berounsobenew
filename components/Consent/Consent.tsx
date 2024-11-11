import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';
import Image from 'next/image';

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    // @ts-ignore
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`sticky bottom-3 xl:w-[50%] lg:w-[70%] m-auto p-3 rounded-3xl bg-[#4ea5cbcc] text-center font-['Montserrat'] ${consent ? 'hidden' : ''
        }`}
    >
      <div className="flex justify-around items-center">
        <Image src="/cookie.svg" width="40" height="40" alt="cookie" />
        <div className="md:flex justify-center items-center">
          <p className="ml-4 mb-4 md:mb-0 text-[0.7rem] md:text-[1rem]">Ano, používáme analytické cookies. Ale můžete je odmítnout.</p>
          <button
            onClick={() => {
              acceptCookie();
            }}
            className="p-2 ml-4 text-[0.7rem] md:text-[1rem] border rounded-xl bg-[#4CA4CA]"
          >
            Přijmout
          </button>
          <button
            onClick={(e) => denyCookie()}
            className="p-2 ml-4 text-[0.7rem] md:text-[1rem] border rounded-xl bg-[#4CA4CA]"
          >
            Odmítnout
          </button>
        </div>
        <button
          onClick={(e) => {
            closeP();
          }}
          className="ml-2"
        >
          <Image src="/close.svg" width="20" height="20" alt="close" />
        </button>
      </div>
    </div>
  );
}

export default Consent;

