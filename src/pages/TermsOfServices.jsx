import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TermsAndServices = () => {
  return (
    <>
      <Navbar filterIcon={false} cartIcon={false} />
      <div className="container main" id="terms__and__conditions">
        <h1>Terms & Conditions</h1>
        <hr />
        <div id="term">
          <h3>Introduction</h3>
          <p>
            Welcome to DigiShopy.com a platform where you can find all you
            favorite brands. We are an online marketplace and these are the
            terms and conditions governing your access and use of Digishopy
            along with its related sub-domains, sites, mobile app, services and
            tools (the "Site"). By using the Site, you hereby accept these terms
            and conditions (including the linked information herein) and
            represent that you agree to comply with these terms and conditions
            (the "User Agreement"). This User Agreement is deemed effective upon
            your use of the Site which signifies your acceptance of these terms.
            If you do not agree to be bound by this User Agreement please do not
            use this Site. The Site reserves the right to change, modify, add,
            or remove portions of these Terms and Conditions at any time without
            any prior notification. Changes will be effective when posted on the
            Site with no other notice provided. Please check these Terms and
            Conditions regularly for updates. Your continued use of the Site
            following the posting of changes to Terms and Conditions of use
            constitutes your acceptance of those changes.
          </p>
          <h3>Returns Policy</h3>
          <p>
            If your product is damaged, defective, incorrect or incomplete at
            the time of delivery, please contact us for a return request through
            our contact number <strong> +92 314 4466764</strong> or send an
            email at
            <strong> digishopypk@gmail.com</strong>. The return request has to
            be placed within 14 days after recieving the order.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndServices;
