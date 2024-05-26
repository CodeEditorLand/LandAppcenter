const models = require("./index");

/**
 * Class representing a UpdateCheckResponse.
 * @extends models['CodePushReleaseInfo']
 */
class UpdateCheckResponse extends models["CodePushReleaseInfo"] {
	/**
	 * Create a UpdateCheckResponse.
	 * @member {string} [downloadUrl]
	 * @member {boolean} isAvailable
	 * @member {number} [packageSize]
	 * @member {boolean} [shouldRunBinaryVersion]
	 * @member {boolean} [updateAppVersion]
	 * @member {string} [packageHash]
	 * @member {string} [label]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of UpdateCheckResponse
	 *
	 * @returns {object} metadata of UpdateCheckResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UpdateCheckResponse",
			type: {
				name: "Composite",
				className: "UpdateCheckResponse",
				modelProperties: {
					targetBinaryRange: {
						required: false,
						serializedName: "target_binary_range",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					isDisabled: {
						required: false,
						serializedName: "is_disabled",
						type: {
							name: "Boolean",
						},
					},
					isMandatory: {
						required: false,
						serializedName: "is_mandatory",
						type: {
							name: "Boolean",
						},
					},
					rollout: {
						required: false,
						serializedName: "rollout",
						constraints: {
							InclusiveMaximum: 100,
							InclusiveMinimum: 1,
						},
						type: {
							name: "Number",
						},
					},
					downloadUrl: {
						required: false,
						serializedName: "download_url",
						type: {
							name: "String",
						},
					},
					isAvailable: {
						required: true,
						serializedName: "is_available",
						type: {
							name: "Boolean",
						},
					},
					packageSize: {
						required: false,
						serializedName: "package_size",
						type: {
							name: "Number",
						},
					},
					shouldRunBinaryVersion: {
						required: false,
						serializedName: "should_run_binary_version",
						type: {
							name: "Boolean",
						},
					},
					updateAppVersion: {
						required: false,
						serializedName: "update_app_version",
						type: {
							name: "Boolean",
						},
					},
					packageHash: {
						required: false,
						serializedName: "package_hash",
						type: {
							name: "String",
						},
					},
					label: {
						required: false,
						serializedName: "label",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UpdateCheckResponse;
