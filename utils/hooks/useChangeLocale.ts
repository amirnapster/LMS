import { useRouter } from 'next/router';

type Locales = 'fa-IR' | 'en-US';

const useChangeLocale = () => {
  const { pathname, asPath, query, push } = useRouter();

  const changeLocale = (nextLocale: Locales) => {
    push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return { changeLocale };
};

export default useChangeLocale;
