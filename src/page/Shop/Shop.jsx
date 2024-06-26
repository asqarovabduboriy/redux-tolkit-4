import React, { useState } from "react";
import "./Shop.css";
import payme from "../../assets/Imgs/paypal.png";

const Shop = () => {
  const shoping = {
    name: "",
    lastName: "",
    country: "",
    city: "",
    addres: "",
    optinoal: "",
    state: "",
    zip: "",
    emai: "",
    phone: "",
  };

  const [shopingData, setShopingData] = useState(shoping);
  const token = '7103158799:AAFA8uad4zRHrA7_OffopReurqjuv2_Ryac'

  const handelesubmit = (e) => {
    console.log(shopingData);
    setShopingData(shoping)
 
  };

  let shop = JSON.parse(localStorage.getItem("carts"));

  let total = shop?.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let card_shop = shop?.map((el) => (
    <div className="shop_sub_total_card" key={el.id}>
      <div className="flex_item_shop_card">
        <img src={el.images[0]} alt={el.title} />
        <h2>{el.brand}</h2>
        <p>(x{el.quantity})</p>
        <b>${el.price * el.quantity}</b>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h1>Billing Address</h1>
        <div className="wrapper__shop_flex">
          <div className="grid-container">
            <div className="grid-item">
              <label>Name</label>
              <input required
                value={shopingData.name}
                onChange={(e) =>
                  setShopingData({ ...shopingData, name: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Last name</label>
              <input  required
                value={shopingData.lastName}
                onChange={(e) =>
                  setShopingData({ ...shopingData, lastName: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Country / Region</label>
              <input  required
                value={shopingData.country}
                onChange={(e) =>
                  setShopingData({ ...shopingData, country: e.target.value })
                }
                type="text"
                placeholder="Select a country / region"
              />
            </div>
            <div className="grid-item">
              <label>Town / City</label>
              <input  required
                value={shopingData.city}
                onChange={(e) =>
                  setShopingData({ ...shopingData, city: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Street Address</label>
              <input  required
                value={shopingData.addres}
                onChange={(e) =>
                  setShopingData({ ...shopingData, addres: e.target.value })
                }
                type="text"
                placeholder="House number and street name"
              />
            </div>
            <div className="grid-item">
              <label>Optional</label>
              <input  required
                type="text"
                placeholder="Appartment, suite, unit, etc. (optional)"
                value={shopingData.optinoal}
                onChange={(e) =>
                  setShopingData({ ...shopingData, optinoal: e.target.value })
                }
              />
            </div>
            <div className="grid-item">
              <label>State</label>
              <input  required
                value={shopingData.state}
                onChange={(e) =>
                  setShopingData({ ...shopingData, state: e.target.value })
                }
                type="text"
                placeholder="Select a state"
              />
            </div>
            <div className="grid-item">
              <label>Zip</label>
              <input  required
                value={shopingData.zip}
                onChange={(e) =>
                  setShopingData({ ...shopingData, zip: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Email address</label>
              <input  required
                value={shopingData.emai}
                onChange={(e) =>
                  setShopingData({ ...shopingData, emai: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Phone Number</label>
              <input  
              required
                value={shopingData.phone}
                onChange={(e) =>
                  setShopingData({ ...shopingData, phone: e.target.value })
                }
                type="text"
                placeholder="+998 94 620 26 61"
              />
            </div>
          </div>
          <div className="shop_sub_total__wrapper">
            <div className="shop_sub_total_title">
              <h2>Products</h2>
              <p>Subtotal</p>
            </div>
            <div className="Line"></div>
            <div className="wrapper_shop_card-flex">{card_shop}</div>

            <div className="tota_cart">
              <h2>Have a coupon code? Click here</h2>
              <div className="Line"></div>
              <div className="coupon_text_one">
                <p>Subtotal</p>
                <b>${total}</b>
              </div>
              <div className="coupon_text_two">
                <p>Coupon Discount</p>
                <b>(-) 00.00</b>
              </div>
              <div className="coupon_text_there">
                <p>Shiping</p>
                <b>$16.00</b>
              </div>
              <div className="coupon_text_four_total">
                <b>Total</b>
                <p>${total ? total + 16 : 0}</p>
              </div>

              <div className="payment__wrapper">
                <input  required className="payment__input" type="radio" />
                <img src={payme} alt="" />
              </div>
              <div className="payment__wrapper">
                <input className="payment__input" type="radio" />
                <p>Dorect bank transfer</p>
              </div>
              <div className="payment__wrapper">
                <input className="payment__input" type="radio" />
                <p>Cash on delivery</p>
              </div>
              <button  onClick={() => handelesubmit()} className="btn_checkout">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
