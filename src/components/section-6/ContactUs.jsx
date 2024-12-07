import classes from "./contactUs.module.css";
import { useState } from "react";

const ContactUs = () => {
  const [inputFields, setInputFields] = useState([
    { name: "", email: "", subject: "", message: "" },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const submit = (sub) => {
    sub.preventDefault();
    console.log(inputFields);
  };

  return (
    <>
      <section className={classes.contactSection}>
        <div className={classes.contactOverLay}>
          <h1>
            تواصل <span>معنا</span>
          </h1>
          <div className={classes.contactInformationWraper}>
            <form>
              {inputFields.map((input, index) => {
                return (
                  <div key={index} className={classes.inputForm}>
                    <input
                      className={classes.nameInput}
                      name="name"
                      placeholder="اسمك"
                      value={input.name}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                    <input
                      className={classes.emailInput}
                      name="email"
                      placeholder="بريدك الإلكترونى"
                      value={input.email}
                      onChange={(event) => handleFormChange(index, event)}
                    />{" "}
                    <br />
                    <input
                      className={classes.subjectInput}
                      name="subject"
                      placeholder="الموضوع"
                      value={input.subject}
                      onChange={(event) => handleFormChange(index, event)}
                    />{" "}
                    <br />
                    <textarea
                      className={classes.messageInput}
                      name="message"
                      placeholder="رسالتك"
                      value={input.message}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                    <button onClick={submit} className={classes.submetBtn}>
                      إرسال
                    </button>
                  </div>
                );
              })}
            </form>

            <div className={classes.socialMediaIcons}>
              <ul className={classes.icons}>
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
              <p className={classes.addres}><span><i className='bx bx-current-location'></i></span> الرياض حي الجزيرة شارع الأخبار بجوار جامع الشيخ سليمان الراجحى </p>
              <p className={classes.phone}><span><i className='bx bxs-phone'></i></span> 01111111111 </p>
              <p className={classes.mail}><span><i className='bx bx-envelope'></i></span> test@gamil.com </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
