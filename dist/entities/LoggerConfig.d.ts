/**
 * @class LoggerConfig
 * @classdesc Class LoggerConfig representing logger configuration container
 * @description Create new instance of logger configuration container class
 * @param {object} [config] - Logger configuration parameters
 */
export declare class LoggerConfig {
    /**
     * @member {string} privateKey
     * @memberOf LoggerConfig
     * @description Coralogix account private key
     * @default FAILED_PRIVATE_KEY
     * @public
     */
    privateKey: string;
    /**
     * @member {string} applicationName
     * @memberOf LoggerConfig
     * @description Application name
     * @default NO_APP_NAME
     * @public
     */
    applicationName: string;
    /**
     * @member {string} subsystemName
     * @memberOf LoggerConfig
     * @description Subsystem name
     * @default NO_SUB_SYSTEM
     * @public
     */
    subsystemName: string;
    /**
     * @member {boolean} debug
     * @memberOf LoggerConfig
     * @description Debug mode
     * @default false
     * @public
     */
    debug: boolean;
    /**
     * @description Initialize new instance of logger configuration container class
     * @param {object} [config] - Logger configuration parameters
     */
    constructor(config?: any);
}
