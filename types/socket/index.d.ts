import {SYSTEM_ROLES} from "../common";

export interface SocketOnlineUser {
    userId: string
    email: string
    name: string
    role: SYSTEM_ROLES
    socketIds: string[]
}

export interface SocketUserInfoObject {
    userId: string
    email: string
    name: string
    role: SYSTEM_ROLES
}

export interface UserTokenVerifyInterface {
    success: boolean
    data: {
        _id: string
        email: string
        role: SYSTEM_ROLES,
        name: string
    }
}