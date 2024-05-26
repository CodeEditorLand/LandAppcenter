/**
 * Class representing a CodePushReleaseMetric.
 */
class CodePushReleaseMetric {
	/**
	 * Create a CodePushReleaseMetric.
	 * @member {string} label
	 * @member {number} active
	 * @member {number} [downloaded]
	 * @member {number} [failed]
	 * @member {number} [installed]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CodePushReleaseMetric
	 *
	 * @returns {object} metadata of CodePushReleaseMetric
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushReleaseMetric",
			type: {
				name: "Composite",
				className: "CodePushReleaseMetric",
				modelProperties: {
					label: {
						required: true,
						serializedName: "label",
						type: {
							name: "String",
						},
					},
					active: {
						required: true,
						serializedName: "active",
						type: {
							name: "Number",
						},
					},
					downloaded: {
						required: false,
						serializedName: "downloaded",
						type: {
							name: "Number",
						},
					},
					failed: {
						required: false,
						serializedName: "failed",
						type: {
							name: "Number",
						},
					},
					installed: {
						required: false,
						serializedName: "installed",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CodePushReleaseMetric;
