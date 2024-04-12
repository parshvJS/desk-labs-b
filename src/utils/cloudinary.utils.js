import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: 'dkl9wgs72',
    api_key: '631482486836488',
    api_secret: 'fWmBil1WBtx0VKe2ys--DFd-Glw'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const uploadedImage = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
            quality: 'auto',
            fetch_format: 'auto'
        });

        fs.unlinkSync(localFilePath);

        return {
            url: uploadedImage.secure_url,
            id: uploadedImage.public_id
        };
    } catch (error) {
        console.error('Error uploading image:', error);
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export { uploadOnCloudinary };
