export const enum MQ_ACTIONS {
    direct = "direct",
    userLogin = "userLogin",
    userRegister = "userRegister",
    userVerified = "userVerified",
    userResetPassword = "userResetPassword",
    userResetSipPassword = "userResetSipPassword",
    newKycCreation = "newKycCreation",
    newSupportCreation = "newSupportCreation",
    newScheduleCreation = "newScheduleCreation",
    lowBalance = "lowBalance",
    logger = "logger",
    balanceInfo = "balanceInfo",
    refreshCDR = "refreshCDR",
    sendingSocketNotification = "sendingSocketNotification"
}

export interface MQMessagesInterface {
    action: MQ_ACTIONS
    data: MQDirectMessageInterface
}

export interface MQDirectMessageInterface {

}

export const enum MQ_ROUTING_KEYS {
    SOCKET_EVENTS = "socket_events",
    MONITORING_ALERT = "monitoring_alert",
}

export interface MQLoggerInterface {
    timestamp: string
    version: string
    message: string
    severity: string
    host: string
}

export interface MQMessages {
    action: MQ_ACTIONS
    data: MQLoggerInterface
}
