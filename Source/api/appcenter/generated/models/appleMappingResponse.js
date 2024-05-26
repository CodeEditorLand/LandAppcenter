/**
 * Apple Mapping Request Type
 *
 */
class AppleMappingResponse {
	/**
	 * Create a AppleMappingResponse.
	 * @member {string} [appId] ID of the apple application in Mobile Center
	 * @member {string} [serviceConnectionId] Id for the shared service
	 * connection. In case of Apple AppStore, this connection will be used to
	 * create and connect to the Apple AppStore in Mobile Center.
	 * @member {string} [appleId] ID of the apple application in apple store
	 * @member {string} [teamIdentifier] ID of the Team associated with the app
	 * in apple store
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleMappingResponse
	 *
	 * @returns {object} metadata of AppleMappingResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleMappingResponse",
			type: {
				name: "Composite",
				className: "AppleMappingResponse",
				modelProperties: {
					appId: {
						required: false,
						serializedName: "app_id",
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
					appleId: {
						required: false,
						serializedName: "apple_id",
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

module.exports = AppleMappingResponse;
