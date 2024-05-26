const models = require("./index");

/**
 * A request containing information for updating a release.
 *
 */
class ReleaseUpdateRequest {
	/**
	 * Create a ReleaseUpdateRequest.
	 * @member {string} [distributionGroupName] OBSOLETE. Will be removed in
	 * future releases - use destinations instead. Name of a distribution group.
	 * The release will be associated with this distribution group. If the
	 * distribution group doesn't exist a 400 is returned. If both distribution
	 * group name and id are passed, the id is taking precedence.
	 * @member {string} [distributionGroupId] OBSOLETE. Will be removed in future
	 * releases - use destinations instead. Id of a distribution group. The
	 * release will be associated with this distribution group. If the
	 * distribution group doesn't exist a 400 is returned. If both distribution
	 * group name and id are passed, the id is taking precedence.
	 * @member {string} [destinationName] OBSOLETE. Will be removed in future
	 * releases - use destinations instead. Name of a destination. The release
	 * will be associated with this destination. If the destination doesn't exist
	 * a 400 is returned. If both distribution group name and id are passed, the
	 * id is taking precedence.
	 * @member {string} [destinationId] OBSOLETE. Will be removed in future
	 * releases - use destinations instead. Id of a destination. The release will
	 * be associated with this destination. If the destination doesn't exist a
	 * 400 is returned. If both destination name and id are passed, the id is
	 * taking precedence.
	 * @member {string} [destinationType] Not used anymore.
	 * @member {string} [releaseNotes] Release notes for this release.
	 * @member {boolean} [mandatoryUpdate] A boolean which determines whether
	 * this version should be a mandatory update or not.
	 * @member {array} [destinations] Distribute this release under the following
	 * list of destinations (store groups or distribution groups).
	 */
	constructor() {}

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
