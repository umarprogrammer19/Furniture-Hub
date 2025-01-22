import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
