import React, { useState } from "react";
import { Col, Row , Modal, Button ,Space,InputNumber, message } from "antd";
import { plusHandle, subHandle, hidePopup, handleOk, cancelpoint } from "./Function/pointFunctions";
import productsData from "./Data/productsData";
import { addToCart, getQuantity , removeFromCart, decreaseQuantity, increaseQuantity } from "./Function/cartFunctions";
import { getTotalPriceAfterDiscount } from "./Function/priceFunctions";
import calculateCategoryDiscount from './Function/CategoryDiscount';
// import imgpath from "../../react-project/src/assets/img";


function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState(productsData);

  const style = {
    background: "#EBFFEB",
    padding: "10px 13px",
    width: "600px",
    height: "350px"
  };

  const container = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
  };

 

  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isCouponApplied2, setIsCouponApplied2] = useState(false);
  const applyCoupon = () => {
    setIsCouponApplied(true);
  };

  const removeCoupon = () => {
    setIsCouponApplied(false);
  };

  const applyCoupon2 = () => {
    setIsCouponApplied2(true);
  };

  const removeCoupon2 = () => {
    setIsCouponApplied2(false);
  };


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inputPoints, setInputPoints] = useState();
  const [inputPointstotal, setinputPointstotal] = useState(0);
  const [Point,setPoint] = useState({
    NumOfoint : 100
  })

  const plusHandled = () => {
    plusHandle(setPoint, Point);
  };

  const subHandled = () => {
    subHandle(setPoint, Point);
  };

  const showPopup = () => {
    setIsPopupVisible(true);
  };
  
  const hidePopuped = () => {
    hidePopup(setIsPopupVisible);
  };

  const handledOk = () => {
    handleOk(inputPoints, Point, setPoint, inputPointstotal, setinputPointstotal, message);
  };

  const cancelpointed = () => {
    cancelpoint(Point, setPoint, inputPointstotal, setinputPointstotal);
  };



  const handleAddToCart = (product) => {
    addToCart(cart, setCart, product); 
  };

  const Quantity = (productId) => {
    return getQuantity(cart, productId);
  };

  // const getQuantity = (productId) => {
  //   const item = cart.find((item) => item.id === productId);
  //   return item ? item.quantity : 0;
  // };


  const handleRemoveFromCart = (productId) => {
    removeFromCart(cart, setCart, productId); 
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(cart, setCart, productId); 
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(cart, setCart, productId); 
  };


  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  const { discounts, totalDiscount } = calculateCategoryDiscount(cart);
  const totalPriceAfterDiscount = getTotalPriceAfterDiscount(getTotalPrice, calculateCategoryDiscount, isCouponApplied, isCouponApplied2, inputPointstotal, cart);
  console.log("Total price after discount", totalPriceAfterDiscount.totalPrice);


  return (
    <div style={{ textAlign: "center" }}>
      <Space size={20} className="my-10">
        <h1 className="mb-10 mt-10">PRODUCTS </h1>
        <img className=" w-16 h-16 mt-4" src="/PropImg/business-icon-png-1944.png" alt="" />
      </Space> 
      <div>
        <Row gutter={[32, 16]}>
          {products.map((product) => (
            <Col span={8} key={product.id}>
              <Row justify="space-between">
                <Col span={24}>
                  <div className="mx-16">
                    {/* <div style={style}><img className=" w-16 h-12" src={`/assets/img/${product.img}`} alt="" /></div> */}
                    <div ><img style={style} src={`/img/${product.img}`} alt="" /></div>
                    <div className="pt-5">
                      <p className=" text-xl">{product.name}</p>
                      <p>Category: {product.category}</p>
                      <p>Price: {product.price} THB</p>
                      {Quantity(product.id)>0 &&(
                        <p> X {Quantity(product.id)}</p>
                      )}
                      
                    </div>
                  </div>
                  <div className="pt-5"><button  onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>


      <div className=" px-16"><hr class="border-t-4 border-gray-700 my-24"></hr></div>

      <div className="rounded-lg outline outline-offset-2 outline-2  m-48">
            <Space size={20}>
              <h1 className=" pt-16">CART  </h1>
              <img className=" w-16 h-16 mt-16" src="/PropImg/cart-icon-28348.png" alt="" />
            </Space> 
          <ul className="pt-5">
            {cart.map((item) => (
              <li key={item.id}>
               <div className="pt-8" style={{ paddingLeft: "36rem" }}>
                  <Space style={container}>
                      <div className="">{item.name} - {item.price} THB { " x "}{item.quantity}{"  "}</div>
                    <Space size={10}  className="">
                      <button className=" w-4 h-10 flex justify-center" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                      <button className=" w-4 h-10 flex justify-center" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <button className=" w-20 h-10 flex justify-center" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </Space>
                      
                  </Space>
                </div>
                
              </li>
            ))}
          </ul>

          <div className="mt-16 pb-5">
              <p className="pb-5 text-xl">Total Price: {getTotalPrice()} THB </p>

            
            {Object.entries(discounts).map(([category, discount]) => (
              <p className="pb-5 text-violet-500" key={category}>Discount for {category}: - {discount} THB</p>
            ))}  

            {isCouponApplied && (
              <div className="pb-5">
                <p className="text-yellow-400" >คูปอง ส่วนลด 50THB: - {totalPriceAfterDiscount.disfix} THB</p>
              </div>
            )}

            
            {isCouponApplied2 && (
              <div className="pb-5">
                <p className="text-yellow-400">คูปอง ส่วนลด 10%: - {totalPriceAfterDiscount.dispercent} THB</p>
              </div>
            )}


            {inputPointstotal > 0 && (
              <div className="pb-5 " >
                <h2 className="text-green-500"> ใช้ส่วนลดจาก Point - {totalPriceAfterDiscount.availablePoints} THB {"(สูงสุด 20 เปอร์เซ็นต์)"}</h2>
              </div>
            )}


            {totalPriceAfterDiscount.Seasonal>0 && (
              <div className="pb-5 " >
                <h2 className=" text-orange-600"> ได้ส่วนลดตามฤดูกาล - {totalPriceAfterDiscount.Seasonal} THB (ทุกๆ 300 บาท จะได้ส่วนลด 40 บาท )</h2>
              </div>
            )}


            {totalPriceAfterDiscount && (
              <div className="pb-5 " >
                <p className=" text-2xl">Total Price after Discount: {totalPriceAfterDiscount.totalPrice} THB</p>
              </div>
            )}
          </div>
          
          <Space size={20} className="mb-16">
            {!isCouponApplied2 ? (
              <button onClick={applyCoupon2}>ส่วนลด 10% THB</button>
            ) : (
              <button onClick={removeCoupon2}>ยกเลิกใช้</button>
            )}

            {!isCouponApplied ? (
              <button onClick={applyCoupon}>ส่วนลด 50 THB</button>
            ) : (
              <button onClick={removeCoupon}>ยกเลิกใช้</button>
            )}

            <Button type="primary" onClick={showPopup}>Point</Button> <div>My point is {Point.NumOfoint} Point</div>
          </Space>

      

          <Modal
            title="POINT CASH"
            visible={isPopupVisible}
            onCancel={hidePopuped}
            footer={[
              <Button key="cancel" onClick={hidePopuped}>ปิด</Button>,
              <Button key="ok" type="primary" onClick={handledOk}>ใช้</Button>,
            ]}
          >
            <Space>
              <div className=" text-xl">My point is {Point.NumOfoint} </div> <br />
              <Button key="plus" onClick={plusHandled}>+50</Button>
              <Button key="sub" onClick={subHandled}>-50</Button>
            </Space>
            <div className="pt-5">
              <Space size={20}>
                <InputNumber  min={0} max={Point.NumOfoint} defaultValue={0} onChange={setInputPoints} /> 
                <Space size={10}><h2> ลดไปได้ {totalPriceAfterDiscount.availablePoints} THB <h3 className=" text-red-500">(สูงสุด {totalPriceAfterDiscount.maxPointDiscount} THB ) Max 20% discount</h3></h2></Space>
              </Space>
            
              <div>
                <h2 className="py-4 ">Point used last is {inputPointstotal} Point</h2>
                <Button className=" bg-slate-500 text-green-300" key="repoint" onClick={cancelpointed} > ยกเลิกใช้ point (คืน point)</Button>
              </div>
            </div>
          </Modal>
        
      </div>
      
    </div>
  );

}

export default App;
