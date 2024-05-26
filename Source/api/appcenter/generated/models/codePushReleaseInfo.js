/**
 * Class representing a CodePushReleaseInfo.
 */
class CodePushReleaseInfo {
	/**
	 * Create a CodePushReleaseInfo.
	 * @member {string} [targetBinaryRange]
	 * @member {string} [description]
	 * @member {boolean} [isDisabled]
	 * @member {boolean} [isMandatory]
	 * @member {number} [rollout]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CodePushReleaseInfo
	 *
	 * @returns {object} metadata of CodePushReleaseInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushReleaseInfo",
			type: {
				name: "Composite",
				className: "CodePushReleaseInfo",
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
				},
			},
		};
	}
}

module.exports = CodePushReleaseInfo;
