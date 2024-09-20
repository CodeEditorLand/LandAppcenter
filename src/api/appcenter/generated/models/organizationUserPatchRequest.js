/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a OrganizationUserPatchRequest.
 */
class OrganizationUserPatchRequest {
  /**
   * Create a OrganizationUserPatchRequest.
   * @member {string} [role] The user's role in the organizatiion. Possible
   * values include: 'admin', 'collaborator'
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrganizationUserPatchRequest
   *
   * @returns {object} metadata of OrganizationUserPatchRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrganizationUserPatchRequest',
      type: {
        name: 'Composite',
        className: 'OrganizationUserPatchRequest',
        modelProperties: {
          role: {
            required: false,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrganizationUserPatchRequest;
