const models = require("./index");

/**
 * status of the app from store
 *
 */
class ReleaseRealTimeStatusResponse {
	/**
	 * Create a ReleaseRealTimeStatusResponse.
	 * @member {string} [releaseId] release id
	 * @member {string} [appId] app id
	 * @member {object} [status]
	 * @member {string} [status.status] status from store
	 * @member {string} [status.storetype] store type
	 * @member {string} [status.track] track information from store
	 * @member {string} [status.version] version of the app from store
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseRealTimeStatusResponse
	 *
	 * @returns {object} metadata of ReleaseRealTimeStatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseRealTimeStatusResponse",
			type: {
				name: "Composite",
				className: "ReleaseRealTimeStatusResponse",
				modelProperties: {
					releaseId: {
						required: false,
						serializedName: "release_id",
						type: {
							name: "String",
						},
					},
					appId: {
						required: false,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "Composite",
							className: "StatusData",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseRealTimeStatusResponse;
