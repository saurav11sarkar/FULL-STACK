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

export const AuthController = {
    loginUser,
    changePassword,
    refreshToken
}