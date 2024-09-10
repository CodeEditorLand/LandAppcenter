/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorGroupOperatingSystem.
 */
class ErrorGroupOperatingSystem {
  /**
   * Create a ErrorGroupOperatingSystem.
   * @member {string} [operatingSystemName] OS name
   * @member {number} [errorCount] count of OS
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupOperatingSystem
   *
   * @returns {object} metadata of ErrorGroupOperatingSystem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupOperatingSystem',
      type: {
        name: 'Composite',
        className: 'ErrorGroupOperatingSystem',
        modelProperties: {
          operatingSystemName: {
            required: false,
            serializedName: 'operatingSystemName',
            type: {
              name: 'String'
            }
          },
          errorCount: {
            required: false,
            serializedName: 'errorCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupOperatingSystem;
