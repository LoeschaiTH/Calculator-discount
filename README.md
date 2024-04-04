# React + Vite
React + Antd + Tailwind CSS + JSON data

The order of applying campaigns is Coupon > On Top > Seasonal. โดยมีรายละเอียดดังนี้

Fixed amount : โดยมีการให้ส่วนลด : -50 บาท

Percentage discount  : โดยมีการให้ส่วนลด -10 % 

Percentage discount by item category :{โดยมีส่วนลดตามหมวดหมู่ Clothing : ลด -15 % , Accessories : ลด -20 % , Accessories : ลด -1 %}

Discount by points : 1 point จะเท่ากับ 1 บาท แต่จะไม่เกิน 20 เปอร์เซ็นต์ เช่น สมมุติคิดยอดรวมตามลำดับแล้ว 200 บาท ใช้ point ไป 50 บาท 
( จะลดแค่ 40 บาทสูงสุด "200 * 20/100" )

Special campaigns : ทุกๆ 300 บาท จะได้ส่วนลด 40 บาท คิดจากส่วนลดทั้งหมดเหลือยอดรวม เอามาหาร 300 โดยไม่เอาเศษ แล้วมาคูณด้วย 40 
( เช่น 899/300 = 2.99 จะเหลือแค่ 2 แล้วนำมา 2 * 40 = 80 บาท
 
โดยจะเรียงการใช้ ดังนี้
Percentage discount by item category > Fixed amount > Percentage discount > Discount by points > Special campaigns 

โดยที่ผมเข้าใจ Percentage discount by item category เป็น Ontop ควรลด เป็นลำดับที่ 2 ต่อจาก Coupon แต่ category ของผมคิดจากสินค้าบางชิ้นตาม category ตามสัดส่วน
ดังนั้น เลยคิดก่อน Coupon เพราะ จะหักส่วนลด -50 หรือ 10% ไม่ได้ เนื่องจากลดจากจำนวนรวม Percentage discount by item category คิดตามตัวสินค้าไป

ผิดพลาดประการใด ขออภัย ณ ที่นี้


Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
