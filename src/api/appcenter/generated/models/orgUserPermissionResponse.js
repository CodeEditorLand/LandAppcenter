/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a OrgUserPermissionResponse.
 */
class OrgUserPermissionResponse {
  /**
   * Create a OrgUserPermissionResponse.
   * @member {string} orgId The unique id (UUID) of the org
   * @member {string} userRole The user role for the org. Possible values
   * include: 'admin', 'collaborator'
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrgUserPermissionResponse
   *
   * @returns {object} metadata of OrgUserPermissionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrgUserPermissionResponse',
      type: {
        name: 'Composite',
        className: 'OrgUserPermissionResponse',
        modelProperties: {
          orgId: {
            required: true,
            serializedName: 'orgId',
            type: {
              name: 'String'
            }
          },
          userRole: {
            required: true,
            serializedName: 'userRole',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrgUserPermissionResponse;
