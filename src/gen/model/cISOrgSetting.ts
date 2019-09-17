/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class CISOrgSetting {
    /**
    * true or false - Boolean that describes if the organisation is a CIS Contractor
    */
    'cISContractorEnabled'?: boolean;
    /**
    * true or false - Boolean that describes if the organisation is a CIS SubContractor
    */
    'cISSubContractorEnabled'?: boolean;
    /**
    * CIS Deduction rate for the organisation
    */
    'rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cISContractorEnabled",
            "baseName": "CISContractorEnabled",
            "type": "boolean"
        },
        {
            "name": "cISSubContractorEnabled",
            "baseName": "CISSubContractorEnabled",
            "type": "boolean"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CISOrgSetting.attributeTypeMap;
    }
}
