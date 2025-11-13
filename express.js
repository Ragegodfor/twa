import redeemVoucher from "./index.js";
import twvoucher from "@ragez/tw-voucher";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Subscribe to Arpan Neupane's channel");
});

app.post("/api/v1/topup",async (req,res)=>{
    //ใส่ req.body ตรงได้ไม่ต้องกลัว object exploit
    twvoucher('เบอร์โทรศัพท์',req.body).then(redeemed => {
        return res.json({
            success: true,
            amount: redeemed.amount
        })
    }).catch(() => {
        return res.json({
            msg: "ลิ้งอั่งเปาไม่ถูกต้อง"
        })
    })
})

export default app; 
