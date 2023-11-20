/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Apple credentials with username, password or service_connection_id of the
 * stored credentials is needed along with team_identifier.
 *
 */
class ItunesAppsRequest {
	/**
	 * Create a ItunesAppsRequest.
	 * @member {string} [username] The username for the Apple Developer account.
	 * @member {string} [password] The password for the Apple Developer account.
	 * @member {string} [serviceConnectionId] The service_connection_id of the
	 * stored Apple credentials instead of username, password.
	 * @member {string} [teamIdentifier] Identifier of the team to use when
	 * logged in.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ItunesAppsRequest
	 *
	 * @returns {object} metadata of ItunesAppsRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ItunesAppsRequest",
			type: {
				name: "Composite",
				className: "ItunesAppsRequest",
				modelProperties: {
					username: {
						required: false,
						serializedName: "username",
						type: {
							name: "String",
						},
					},
					password: {
						required: false,
						serializedName: "password",
						type: {
							name: "String",
						},
					},
					serviceConnectionId: {
						required: false,
						serializedName: "service_connection_id",
						type: {
							name: "String",
						},
					},
					teamIdentifier: {
						required: false,
						serializedName: "team_identifier",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ItunesAppsRequest;
