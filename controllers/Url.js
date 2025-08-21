
import { urlModel } from "../models/url.js";
import shortid from "shortid";

export const shortner = async (req, res) =>{
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate(); // instead of shortid, we can also use uuid

    const shortUrl = `http://localhost:3000/${shortCode}`;

    // Save to database
    const newUrl = new urlModel({ shortCode, longUrl });
    await newUrl.save();

    // console.log("Short URL created:", newUrl);

    res.render('form.ejs', {shortUrl})
}


export const getOriginalUrl = async (req, res) => {
    const shortcode = req.params.shortcode;

    const originalUrl = await urlModel.findOne({shortcode})

    if(originalUrl){
        res.redirect(originalUrl.longUrl);
    }
    else{
        res.status(404).send("URL not found");
    }
}