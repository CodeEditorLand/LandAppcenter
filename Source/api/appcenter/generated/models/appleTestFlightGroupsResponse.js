/**
 * Apple Test Flight Groups Response Type
 *
 */
class AppleTestFlightGroupsResponse {
	/**
	 * Create a AppleTestFlightGroupsResponse.
	 * @member {string} [id] id of the group.
	 * @member {number} [providerId] provider id of the group.
	 * @member {number} [appleId] apple id of the group.
	 * @member {string} [name] name of the group.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleTestFlightGroupsResponse
	 *
	 * @returns {object} metadata of AppleTestFlightGroupsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleTestFlightGroupsResponse",
			type: {
				name: "Composite",
				className: "AppleTestFlightGroupsResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					providerId: {
						required: false,
						serializedName: "providerId",
						type: {
							name: "Number",
						},
					},
					appleId: {
						required: false,
						serializedName: "appleId",
						type: {
							name: "Number",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppleTestFlightGroupsResponse;
