'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push("/1");
    },2000)
  }, [router])
  return (
    <>
   <div className="my-customCssDude body pt-0  ">
      <img className="header-body-roasting" src="/assets/header.png" width="250" />
   </div>
</>
  );
}
