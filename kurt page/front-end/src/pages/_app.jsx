// import "../globals.css";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useCookies } from "react-cookie";
// import { useEffect } from "react";
// import { StateProvider } from "../context/StateContext";
// import reducer, { initialState } from "../context/StateReducers";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
//   const [cookies] = useCookies();
//   useEffect(() => {
//     if (
//       router.pathname.includes("/seller") ||
//       router.pathname.includes("/buyer")
//     ) {
//       if (!cookies.jwt) {
//         router.push("/");
//       }
//     }
//   }, [cookies, router]);

//   return (
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <Head>

//         <title>ExponentialPh</title>
//       </Head>
//       <div className="relative flex flex-col h-screen justify-between">
//         <Navbar />
//         <div
//           className={`${
//             router.pathname !== "/" ? "mt-36" : ""
//           } mb-auto w-full mx-auto`}
//         >
//           <Component {...pageProps} />
//         </div>
//         <Footer />
//       </div>
//     </StateProvider>
//   );
// }

import "../globals.css";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/Navbar";
import { AuthProvider } from "../context/authContext";
export default function App({ Component, pageProps }){
  return(
  <div className={"mb-auto w-ful mx-auto"}>
  <AuthProvider> 
    <Component {...pageProps} />;
  </AuthProvider>
  </div>
  );
}