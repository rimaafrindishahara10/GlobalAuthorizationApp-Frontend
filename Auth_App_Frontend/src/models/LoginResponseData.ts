import type User from "./User";

export default interface LoginResposeData {
    accessToken: string;
    userDto: User;
    refreshToken: string;
    expiresIn: number;
}