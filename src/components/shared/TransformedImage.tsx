import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { getImageSize } from "@/lib/utils";
const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const donwloadHandler=()=>{
    console.log("donload")
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
       <h3 className="h3-bold text-dark-600">
        Transformed
       </h3>
       {hasDownload &&(<button className="donwload-btn" onClick={donwloadHandler}>
        <Image src="/assets/icons/download.svg" alt="download" width={24} height={24}/>
       </button>)}
      </div>
      {image?.publicId && isTransforming?(<div className="relative">
      <CldImage 
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="media-uploader_cldImage"
                />
      </div>):(<div className="transformed-placeholder">Transformed Image</div>)}
    </div>
  )
};

export default TransformedImage;
