import { useEffect, useState } from 'react';
import '../styles/style.scss'
import '../styles/helpers.scss'

const MyApp = ({ Component, pageProps }) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    setIsServer(false);
  }, []);

  if (isServer) {
    return <></>;
  }
  return (
      <Component {...pageProps} />
  );
};

export default MyApp;
