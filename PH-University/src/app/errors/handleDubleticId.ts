import mongoose from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "../interface/error";

const handleDubleticId = (err:any):TGenericErrorResponse =>{

    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSources:TErrorSource = [{
        path:'',
        message:`${extractedMessage} is alrady exsits`
    }]

    const statusCode = 400;
    return {
        statusCode,
        message:"Invalid Id",
        errorSources
    }
}

export default handleDubleticId;

