'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";

export default function Home() {
  return (
    <>
    <Header />
    
    <h1 className="text-center text-danger mt-5">Please wait...</h1>
    <div className="text-center ">
      <img src="/assets/ok.png" width={100} />
    </div>
    <h5 className="text-center text-danger" >
      Your verification is complete ✅ within 24 Hours validity.
    </h5>
    <Footer />
</>
  );
}
