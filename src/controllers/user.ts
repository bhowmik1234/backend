import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { newUserRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utiliy-class.js";
import { TryCatch } from "../middlewares/error.js";

export const newUser = TryCatch(
  async (
    req: Request<{}, {}, newUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, gender, _id, photo, dob } = req.body;

    let user = await User.findById(_id);

    if(user){
        return res.status(200).json({
            success: true,
            message: `welcome ${user.name}`,
        })
    }

    if(!_id || !name || !email || !gender || !photo || !dob){
        next(new ErrorHandler("Please provide all the details", 400));
    }

    user = await User.create({
      name,
      email,
      gender,
      _id,
      photo,
      dob: new Date(dob),
    });

    return res.status(200).json({
      success: true,
      message: `welcome ${user.name}`,
    });
  }
);

export const getallUsers = TryCatch(async(req, res, next)=>{
 
    const user = await User.find({});

    return res.status(200).json({
        success: true,
        users: user
    })

})

export const getUser = TryCatch(async(req, res, next)=>{
    const id = req.params.id;

    const user = await User.findById({_id:id});
    if(!user){
        return next(new ErrorHandler("Invalid Id", 400));
    }
    return res.status(200).json({
        success: true,
        user: user
    })

})

export const deleteUser = TryCatch(async(req, res, next)=>{
    const id = req.params.id;
    const user = await User.findById({_id:id});

    if(!user) return next(new ErrorHandler("Invalid Id", 400));

    await user.deleteOne();

    return res.status(200).json({
        success: true,
        message: "User deleted successfully"
    })

})