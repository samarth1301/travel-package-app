const express = require("express");
const router = express.Router();
const Room = require("../models/Places")
const Booking = require("../models/booking");
router.post("/bookplace", async (req, res) => {

    const {
        places,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays,
        token } = req.body

    try {

        // const customer = await stripe.customers.create({
        //     email: token.email,
        //     source: token.id
        // })

        // const payment = await stripe.charges.create({

        //     amount: totalAmount * 100,
        //     customer: customer.id,
        //     currency: "inr",
        //     receipt_email: token.email

        //     },{
        //         idempotencyKey: uuidv4()
        //     }
        // )

        // if(payment) {

            const newbooking = new Booking({
                places: places.name,
                placesid: places._id,
                userid,
                fromDate: fromDate,
                toDate: toDate,
                totalAmount,
                totalDays,
                transactionId: "1234"
            });

            const booking = await newbooking.save();

            const placestemp = await Room.findOne({ _id: places._id });

            placestemp.currentbookings.push({ bookingid: booking._id, fromDate: fromDate, toDate: toDate, userid: userid, status: booking.status })

            await placestemp.save();
            res.send("Room Booked Successfully");

        
        
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.post("/getBookingsByUserId",async(req,res)=>{
    const userid = req.body.userid

    try {
        const bookings = await Booking.find({userid : userid})
        res.send(bookings)

    } catch (error) {
        return res.status(400).json({ error })
    }

});

router.post("/cancelBooking" , async(req,res)=>{
    const {bookingid , placesid} = req.body

    try {
        const bookingItem = await Booking.findOne({_id : bookingid})
        bookingItem.status = "cancelled";
        await bookingItem.save()
        const room = await Room.findOne({_id : placesid});
        const bookings = room.currentbookings
        const temp = bookings.filter(booking=>booking.bookingid.toString()!==bookingid)
        room.currentbookings= temp
        await room.save()
        res.send("Your Booking Cancelled Successful");
    } catch (error) {
        return res.status(400).json({error})
    }

})

router.get("/getAllBookings" ,async(req,res) => {

    try {
        const bookings = await Booking.find()
        res.send(bookings);
    } catch (error) {
        return res.status(400).json({ error })
    }

});

module.exports = router;