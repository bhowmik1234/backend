import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utiliy-class.js";
import { ControllerTypes } from "../types/types.js";

export const errorMiddleware = (err:ErrorHandler, req:Request, res: Response, next:NextFunction)=>{
    err.message ||= "Internal server error";
    err.statusCode ||= 500;

    if(err.name==="CastError") err.message = "Invalid Id ";

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}

// create shortcut try catch block
export const TryCatch = (func: ControllerTypes) => (req:Request, res:Response, next:NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};

