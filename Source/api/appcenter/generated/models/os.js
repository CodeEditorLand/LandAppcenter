/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a OS.
 */
class OS {
	/**
	 * Create a OS.
	 * @member {string} [osName] OS name
	 * @member {number} [count] count current of OS
	 * @member {number} [previousCount] count of previous OS
	 */
	constructor() {}

	/**
	 * Defines the metadata of OS
	 *
	 * @returns {object} metadata of OS
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OS",
			type: {
				name: "Composite",
				className: "OS",
				modelProperties: {
					osName: {
						required: false,
						serializedName: "os_name",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					previousCount: {
						required: false,
						serializedName: "previous_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = OS;
