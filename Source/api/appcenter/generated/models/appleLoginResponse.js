/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Indicates if login was successful.
 *
 */
class AppleLoginResponse {
	/**
	 * Create a AppleLoginResponse.
	 * @member {boolean} [successful] True when login was successful.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleLoginResponse
	 *
	 * @returns {object} metadata of AppleLoginResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleLoginResponse",
			type: {
				name: "Composite",
				className: "AppleLoginResponse",
				modelProperties: {
					successful: {
						required: false,
						serializedName: "successful",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AppleLoginResponse;
