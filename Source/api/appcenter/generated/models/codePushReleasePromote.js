/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a CodePushReleasePromote.
 * @extends models['CodePushReleaseInfo']
 */
class CodePushReleasePromote extends models["CodePushReleaseInfo"] {
	/**
	 * Defines the metadata of CodePushReleasePromote
	 *
	 * @returns {object} metadata of CodePushReleasePromote
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushReleasePromote",
			type: {
				name: "Composite",
				className: "CodePushReleasePromote",
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

module.exports = CodePushReleasePromote;
