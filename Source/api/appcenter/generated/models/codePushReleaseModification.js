const models = require("./index");

/**
 * Class representing a CodePushReleaseModification.
 * @extends models['CodePushReleaseInfo']
 */
class CodePushReleaseModification extends models["CodePushReleaseInfo"] {
	/**
	 * Create a CodePushReleaseModification.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of CodePushReleaseModification
	 *
	 * @returns {object} metadata of CodePushReleaseModification
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushReleaseModification",
			type: {
				name: "Composite",
				className: "CodePushReleaseModification",
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

module.exports = CodePushReleaseModification;
