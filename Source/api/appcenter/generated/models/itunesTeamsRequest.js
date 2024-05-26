/**
 * Apple credentials with username, password or service_connection_id of the
 * stored credentials is needed.
 *
 */
class ItunesTeamsRequest {
	/**
	 * Create a ItunesTeamsRequest.
	 * @member {string} [username] The username for the Apple Developer account.
	 * @member {string} [password] The password for the Apple Developer account.
	 * @member {string} [serviceConnectionId] The service_connection_id of the
	 * stored Apple credentials instead of username, password.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ItunesTeamsRequest
	 *
	 * @returns {object} metadata of ItunesTeamsRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ItunesTeamsRequest",
			type: {
				name: "Composite",
				className: "ItunesTeamsRequest",
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
				},
			},
		};
	}
}

module.exports = ItunesTeamsRequest;
