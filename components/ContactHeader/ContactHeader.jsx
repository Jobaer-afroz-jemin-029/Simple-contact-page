
import styles from "./contactHeader.module.css"
const ContactHeader = () => {
  return (
    <div className={` container ${styles.contact_section} `}>
      <div>
        <h1>
        CONTACT US
        </h1>
      </div>
      <div>
        <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </p>
      </div>
    </div>
  )
}

export default ContactHeader