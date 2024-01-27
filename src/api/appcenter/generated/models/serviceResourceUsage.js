/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Resource usage for a single Mobile Center service
 *
 */
class ServiceResourceUsage {
  /**
   * Create a ServiceResourceUsage.
   * @member {object} [currentUsagePeriod]
   * @member {string} [currentUsagePeriod.startTime] Inclusive start time of
   * the usage period
   * @member {string} [currentUsagePeriod.endTime] Exclusive end time of the
   * usage period.
   * @member {object} [currentUsagePeriod.byAccount]
   * @member {object} [currentUsagePeriod.byApp]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceResourceUsage
   *
   * @returns {object} metadata of ServiceResourceUsage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceResourceUsage',
      type: {
        name: 'Composite',
        className: 'ServiceResourceUsage',
        modelProperties: {
          currentUsagePeriod: {
            required: false,
            serializedName: 'currentUsagePeriod',
            type: {
              name: 'Composite',
              className: 'UsagePeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceResourceUsage;
