"use server";
import User from "../database/models/user.model";
import { ConnectToDB } from "../database/database";
import { handleError } from "../utils";
import { creditFee } from "@/constants";

// create user
export async function createUser(user: CreateUserParams) {
  try {
    await ConnectToDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
//read
export async function getUserById(userId: String) {
  try {
    await ConnectToDB();
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      throw new Error("user is not found");
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// u[pdate]
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await ConnectToDB();
    const updatedUser = await User.findByIdAndUpdate({ clerkId }, user, {
      new: true,
    });
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// delete user
export async function deleteUser(clerkId: string) {
  try {
    await ConnectToDB();
    const deletedUser = await User.findByIdAndDelete({ clerkId });
    if (!deletedUser) throw new Error("Failed to delete the user");
    return JSON.parse(JSON.stringify(deleteUser));
  } catch (error) {
    handleError(error);
  }
}

// credits
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await ConnectToDB();
    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );
    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}
