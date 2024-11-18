import styles from '../css.module.css';

export default function Footer() {
  return (

    <>
    <footer className={`mt-5 ${styles.Centering}`}>
      <div className={`bg-primary py-2 ${styles.textCenterDiv}`} style={{fontSize:"14px", marginTop:"100px"}}>  
					©Secure Saraswat Bank Ltd. <br /> Terms and Conditions Privacy Policy
							
      </div>
  </footer>  
    </>
  

  );
}
