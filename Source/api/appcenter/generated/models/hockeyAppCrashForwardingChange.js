/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a HockeyAppCrashForwardingChange.
 */
class HockeyAppCrashForwardingChange {
	/**
	 * Create a HockeyAppCrashForwardingChange.
	 * @member {boolean} [enableForwarding]
	 */
	constructor() {}

	/**
	 * Defines the metadata of HockeyAppCrashForwardingChange
	 *
	 * @returns {object} metadata of HockeyAppCrashForwardingChange
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HockeyAppCrashForwardingChange",
			type: {
				name: "Composite",
				className: "HockeyAppCrashForwardingChange",
				modelProperties: {
					enableForwarding: {
						required: false,
						serializedName: "enable_forwarding",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = HockeyAppCrashForwardingChange;
