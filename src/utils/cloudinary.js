import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


 cloudinary.config({ 
        cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET 
    });

     
    const uploadCloudinary = async (localfilepath) => {
        try{
            if(!localfilepath) return null
            //upload the file on cloudinary

     const response = await cloudinary.uploader.upload( localfilepath, {
        resource_type: "auto"
     })

     //file uploaded
     console.log("file is uploaded on cloudinary");
     console.log(response.url);
     return response
     
     
        }
       catch(error){
           fs.unlinkSync(localfilepath) //remove the locally saved temporary file as the upload operation got failed
           return null;
       };
    
    }

    export {uploadCloudinary}
    
    