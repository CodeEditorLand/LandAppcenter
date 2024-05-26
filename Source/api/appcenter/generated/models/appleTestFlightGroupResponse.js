/**
 * test flight group details for the app.
 *
 */
class AppleTestFlightGroupResponse {
	/**
	 * Create a AppleTestFlightGroupResponse.
	 * @member {string} [id] id of the group.
	 * @member {number} [providerId] provider id of the group.
	 * @member {number} [appAdamId] apple id of the group.
	 * @member {string} [name] name of the group.
	 * @member {boolean} [active] true if group is in active state.
	 * @member {boolean} [isInternalGroup] true if the group is an internal
	 * group.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleTestFlightGroupResponse
	 *
	 * @returns {object} metadata of AppleTestFlightGroupResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleTestFlightGroupResponse",
			type: {
				name: "Composite",
				className: "AppleTestFlightGroupResponse",
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
					appAdamId: {
						required: false,
						serializedName: "appAdamId",
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
					active: {
						required: false,
						serializedName: "active",
						type: {
							name: "Boolean",
						},
					},
					isInternalGroup: {
						required: false,
						serializedName: "isInternalGroup",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AppleTestFlightGroupResponse;
