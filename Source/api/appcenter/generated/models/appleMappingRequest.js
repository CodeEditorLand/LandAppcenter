/**
 * Apple Mapping Request Type
 *
 */
class AppleMappingRequest {
	/**
	 * Create a AppleMappingRequest.
	 * @member {string} serviceConnectionId Id for the shared service connection.
	 * In case of Apple AppStore, this connection will be used to create and
	 * connect to the Apple AppStore in Mobile Center.
	 * @member {string} [appleId] ID of the apple application in apple store,
	 * takes precedence over bundle_identifier when both are provided
	 * @member {string} [bundleIdentifier] Bundle Identifier of the apple package
	 * @member {string} teamIdentifier ID of the Team associated with the app in
	 * apple store
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleMappingRequest
	 *
	 * @returns {object} metadata of AppleMappingRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleMappingRequest",
			type: {
				name: "Composite",
				className: "AppleMappingRequest",
				modelProperties: {
					serviceConnectionId: {
						required: true,
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
					bundleIdentifier: {
						required: false,
						serializedName: "bundle_identifier",
						type: {
							name: "String",
						},
					},
					teamIdentifier: {
						required: true,
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

module.exports = AppleMappingRequest;
