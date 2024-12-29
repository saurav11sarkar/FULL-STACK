import { config } from "../../config";
import catchAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async(req, res) => {
    const result = await AuthService.loginUser(req.body);

    const {accessToken, refreshToken} = result;
    res.cookie('refreshToken', refreshToken,{
        secure:config.ENV === 'production',
        httpOnly:true,
    })

    res.status(200).json({
        success: true,
        message: 'User login successfully',
        data: {
            accessToken:accessToken,
            refreshToken:refreshToken,
            needPasswordChange: result.needPasswordChange
        }
    })
});

const changePassword = catchAsync(async(req, res) => {
    const {...passwordData} = req.body;
    const result = await AuthService.changePassword(req.user, passwordData);
    res.status(200).json({
        success: true,
        message: 'Password changed successfully',
        data: result
    })
});

const refreshToken = catchAsync(async(req, res) => {
    const {refreshToken} = req.cookies;
    const result = await AuthService.refreshToken(refreshToken);

    res.status(200).json({
        success: true,
        message: 'Access token is retriep successfully',
        data: result
    })
});

const forgetPassword = catchAsync(async(req, res) => {
    const userId = req.body.id;
    const result = await AuthService.forgetPassword(userId);
    res.status(200).json({
        success: true,
        message: 'Reset link is generated successfully',
        data: result
    })
});

const resetPassword = catchAsync(async(req,res)=>{
    const token = req.headers.authorization
    const result = await AuthService.resetPassword(req.body,token as string);
    res.status(200).json({
        success:true,
        message:"Reset password successfully",
        data:result
    })
})

export const AuthController = {
    loginUser,
    changePassword,
    refreshToken,
    forgetPassword,
    resetPassword
}