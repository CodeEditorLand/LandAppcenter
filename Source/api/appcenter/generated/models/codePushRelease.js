const models = require("./index");

/**
 * Class representing a CodePushRelease.
 * @extends models['CodePushReleaseInfo']
 */
class CodePushRelease extends models["CodePushReleaseInfo"] {
	/**
	 * Create a CodePushRelease.
	 * @member {string} [label]
	 * @member {string} [packageHash]
	 * @member {string} [blobUrl]
	 * @member {object} [diffPackageMap]
	 * @member {string} [originalDeployment] Set on 'Promote'
	 * @member {string} [originalLabel] Set on 'Promote' and 'Rollback'
	 * @member {string} [releasedBy]
	 * @member {string} [releaseMethod] The release method is unknown if
	 * unspecified. Possible values include: 'Upload', 'Promote', 'Rollback'
	 * @member {number} [size]
	 * @member {number} [uploadTime]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of CodePushRelease
	 *
	 * @returns {object} metadata of CodePushRelease
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushRelease",
			type: {
				name: "Composite",
				className: "CodePushRelease",
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
					packageHash: {
						required: false,
						serializedName: "package_hash",
						type: {
							name: "String",
						},
					},
					blobUrl: {
						required: false,
						serializedName: "blob_url",
						type: {
							name: "String",
						},
					},
					diffPackageMap: {
						required: false,
						serializedName: "diff_package_map",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "BlobInfoElementType",
								type: {
									name: "Composite",
									className: "BlobInfo",
								},
							},
						},
					},
					originalDeployment: {
						required: false,
						serializedName: "original_deployment",
						type: {
							name: "String",
						},
					},
					originalLabel: {
						required: false,
						serializedName: "original_label",
						type: {
							name: "String",
						},
					},
					releasedBy: {
						required: false,
						serializedName: "released_by",
						type: {
							name: "String",
						},
					},
					releaseMethod: {
						required: false,
						serializedName: "release_method",
						type: {
							name: "String",
						},
					},
					size: {
						required: false,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
					uploadTime: {
						required: false,
						serializedName: "upload_time",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CodePushRelease;
