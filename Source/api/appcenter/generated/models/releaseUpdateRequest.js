/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * A request containing information for updating a release.
 *
 */
class ReleaseUpdateRequest {
	/**
	 * Defines the metadata of ReleaseUpdateRequest
	 *
	 * @returns {object} metadata of ReleaseUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseUpdateRequest",
			type: {
				name: "Composite",
				className: "ReleaseUpdateRequest",
				modelProperties: {
					distributionGroupName: {
						required: false,
						serializedName: "distribution_group_name",
						type: {
							name: "String",
						},
					},
					distributionGroupId: {
						required: false,
						serializedName: "distribution_group_id",
						type: {
							name: "String",
						},
					},
					destinationName: {
						required: false,
						serializedName: "destination_name",
						type: {
							name: "String",
						},
					},
					destinationId: {
						required: false,
						serializedName: "destination_id",
						type: {
							name: "String",
						},
					},
					destinationType: {
						required: false,
						serializedName: "destination_type",
						type: {
							name: "String",
						},
					},
					releaseNotes: {
						required: false,
						serializedName: "release_notes",
						type: {
							name: "String",
						},
					},
					mandatoryUpdate: {
						required: false,
						serializedName: "mandatory_update",
						type: {
							name: "Boolean",
						},
					},
					destinations: {
						required: false,
						serializedName: "destinations",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DestinationIdElementType",
								type: {
									name: "Composite",
									className: "DestinationId",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseUpdateRequest;
