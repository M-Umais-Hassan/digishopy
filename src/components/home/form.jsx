import { useState } from "react";
import Select from "./select";
import { provinces } from "../../utils/data";
import { BsCartXFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { placeOrder } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({
  cartItems,
  price,
  items,
  deliveryCharges,
  openModal,
  clearCartItems,
}) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    address: "",
    country: "Pakistan",
    province: "",
    city: "",
    postalCode: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    contactNo: Yup.string().required("Contact Number is required"),
    email: Yup.string().email("Invalid email format"),
    address: Yup.string().required("Address is required"),
    province: Yup.string().required("Province is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
  });

  const onSubmit = async () => {
    if (cartItems.length > 0) {
      setLoading(true);
      await placeOrder(formik.values)
        .then(() => {
          formik.resetForm();
          clearCartItems();
          openModal();
        })
        .catch(() => {
          toast.error(
            "Some Error Occurred while placing your order, please try again later"
          );
        });
      setLoading(false);
    } else {
      toast.error("Cart is empty");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="form__area" id="form">
      <h1>Order Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <>
          <h3>Personal Info</h3>
          <div className="input__group">
            <div className="input__field">
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div id="error">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="input__field">
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div id="error">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className="input__field">
            <input
              type="text"
              placeholder="Contact Number"
              id="contactNo"
              name="contactNo"
              {...formik.getFieldProps("contactNo")}
            />
            {formik.touched.contactNo && formik.errors.contactNo ? (
              <div id="error">{formik.errors.contactNo}</div>
            ) : null}
          </div>
          <div className="input__field">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div id="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </>
        <>
          <h3>Address</h3>
          <div className="input__group">
            <div className="input__field">
              <input
                type="text"
                placeholder="Country"
                value={formik.values.country}
                disabled
                {...formik.getFieldProps("country")}
              />
            </div>
            <div className="input__field">
              <Select
                data={provinces}
                id="province"
                name="province"
                formik={formik}
              />
              {formik.touched.province && formik.errors.province ? (
                <div id="error">{formik.errors.province}</div>
              ) : null}
            </div>
            <div className="input__field">
              <input
                type="text"
                placeholder="City"
                id="city"
                name="city"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city ? (
                <div id="error">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="input__field">
              <input
                type="text"
                placeholder="Postal Code"
                id="postalCode"
                name="postalCode"
                {...formik.getFieldProps("postalCode")}
              />
              {formik.touched.postalCode && formik.errors.postalCode ? (
                <div id="error">{formik.errors.postalCode}</div>
              ) : null}
            </div>
          </div>
          <div className="input__field">
            <input
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address ? (
              <div id="error">{formik.errors.address}</div>
            ) : null}
          </div>
        </>
        <>
          <h3>Order Details</h3>
          {cartItems.length ? (
            cartItems.map((item, index) => (
              <>
                <h4 id="txt__color__light">Product {index + 1}</h4>
                <div className="input__group">
                  <div className="input__field">
                    <input
                      type="text"
                      placeholder="Product Name"
                      value={item.title}
                      disabled
                    />
                  </div>
                  <div className="input__field">
                    <input
                      type="text"
                      placeholder="Product Price"
                      value={`${item.price} Rs`}
                      disabled
                    />
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="empty__cart">
              <BsCartXFill />
            </div>
          )}
        </>
        {cartItems.length > 0 && (
          <>
            <h3>Total</h3>
            <div className="input__group">
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Total Price"
                  value={`Total Amount: ${price}`}
                  disabled
                />
              </div>
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Total Items"
                  value={`Total Products: ${items}`}
                  disabled
                />
              </div>
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Total Items"
                  value={`Delievery Charges: ${deliveryCharges} Rs`}
                  disabled
                />
              </div>
            </div>
          </>
        )}
        {cartItems.length > 0 && (
          <>
            <h3>Sub Total</h3>
            <div className="input__group">
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Total Price"
                  value={`${parseFloat(price)} + ${parseFloat(
                    deliveryCharges
                  )} = ${parseFloat(price) + parseFloat(deliveryCharges)}`}
                  disabled
                />
              </div>
            </div>
          </>
        )}
        <div className="button">
          <button type="submit" disabled={loading}>
            {loading ? "Order Placing..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
