import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const OrderPlaced = ({ closeModal }) => {
  return (
    <>
      <div className="overlay__component" onClick={closeModal}></div>
      <div className="order__placed__modal">
        <h1 id="txt__color__primary">Thankyou for placing the order</h1>
        <br />
        <p>
          You will recieve an order confirmation message on given number within
          12 hours once our team will review the order
        </p>
        <br />
        <strong>Feel Free to contact if you have any query</strong>
        <div className="contact__info">
          <a
            href="mailto:digishopy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=03441103225"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
          <a href="tel:03441103225" target="_blank" rel="noopener noreferrer">
            <FiPhoneCall />
          </a>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
