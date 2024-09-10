/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorGroupState.
 */
class ErrorGroupState {
  /**
   * Create a ErrorGroupState.
   * @member {string} state Possible values include: 'open', 'closed',
   * 'ignored'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupState
   *
   * @returns {object} metadata of ErrorGroupState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupState',
      type: {
        name: 'Composite',
        className: 'ErrorGroupState',
        modelProperties: {
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupState;
