import fs from 'fs'
import { uploadOnCloudinary } from '../utils/cloudinary.utils.js';

export async function uploader(req,res){
    let pdf_url=[];
    await Promise.all(req.files.map(async (file) => {
        const upload_url = await uploadOnCloudinary(file.path);
        pdf_url.push(upload_url);
       
    }));

      console.log(pdf_url);
return res.json({
    imageUrl : pdf_url
})
}