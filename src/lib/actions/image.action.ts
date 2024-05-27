// "use server";

// import { revalidatePath } from "next/cache";
// import { ConnectToDB } from "../database/database";
// import { handleError } from "../utils";
// import User from "../database/models/user.model";
// import Image from "../database/models/image.model";
// import { redirect } from "next/navigation";

// const populateUser = (query: any) => query.populate({
//     path: 'author',
//     model: User,
//     select: '_id firstName lastName clerkId'
//   })
// // add the image to db
// export async function AddImage({ image, userId, path }: AddImageParams) {
//   try {
//     await ConnectToDB();
//     revalidatePath(path);
//     const author = User.findById(userId);
//     if (!author) throw new Error("User not found");
//     const newImage = await Image.create({
//       ...image,
//       author: author._id,
//     });
//     return JSON.parse(JSON.stringify(newImage));
//   } catch (error) {
//     handleError(error);
//   }
// }
// // update image
// export async function UpdateImage({ image, userId, path }: AddImageParams) {
//   try {
//     await ConnectToDB();
//     revalidatePath(path);
//     const imageToUpdate = await Image.findById(image._id);
//     if (!imageToUpdate || imageToUpdate.author.toHexString() !== useI)
//       throw new Error("Image not Found!");
//     const UpdateToImage = await Image.findByIdAndUpdate(
//       imageToUpdate._id,
//       image,
//       { new: true }
//     );
//     return JSON.parse(JSON.stringify(UpdateImage));
//   } catch (error) {
//     handleError(error);
//   }
// }

// // delete image
// export async function deleteImage(imageId: string) {
//     try {
//       await ConnectToDB();
  
//       await Image.findByIdAndDelete(imageId);
//     } catch (error) {
//       handleError(error)
//     } finally{
//       redirect('/')
//     }
//   }
  
// // get image
// export async function getImageById(imageId: string) {
//     try {
//       await ConnectToDB();
  
//       const image = await populateUser(Image.findById(imageId));
  
//       if(!image) throw new Error("Image not found");
  
//       return JSON.parse(JSON.stringify(image));
//     } catch (error) {
//       handleError(error)
//     }
//   }
  
