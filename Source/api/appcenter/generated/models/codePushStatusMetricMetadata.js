/**
 * Class representing a CodePushStatusMetricMetadata.
 */
class CodePushStatusMetricMetadata {
	/**
	 * Create a CodePushStatusMetricMetadata.
	 * @member {string} deploymentKey
	 * @member {string} [label]
	 * @member {string} [appVersion]
	 * @member {string} [previousDeploymentKey]
	 * @member {string} [previousLabelOrAppVersion]
	 * @member {string} [status]
	 * @member {string} [clientUniqueId]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CodePushStatusMetricMetadata
	 *
	 * @returns {object} metadata of CodePushStatusMetricMetadata
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushStatusMetricMetadata",
			type: {
				name: "Composite",
				className: "CodePushStatusMetricMetadata",
				modelProperties: {
					deploymentKey: {
						required: true,
						serializedName: "deployment_key",
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
					appVersion: {
						required: false,
						serializedName: "app_version",
						type: {
							name: "String",
						},
					},
					previousDeploymentKey: {
						required: false,
						serializedName: "previous_deployment_key",
						type: {
							name: "String",
						},
					},
					previousLabelOrAppVersion: {
						required: false,
						serializedName: "previous_label_or_app_version",
						type: {
							name: "String",
						},
					},
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					clientUniqueId: {
						required: false,
						serializedName: "client_unique_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CodePushStatusMetricMetadata;
