const models = require("./index");

/**
 * Class representing a GetReleasesContainer.
 */
class GetReleasesContainer {
	/**
	 * Create a GetReleasesContainer.
	 * @member {array} releases
	 */
	constructor() {}

	/**
	 * Defines the metadata of GetReleasesContainer
	 *
	 * @returns {object} metadata of GetReleasesContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "GetReleasesContainer",
			type: {
				name: "Composite",
				className: "GetReleasesContainer",
				modelProperties: {
					releases: {
						required: true,
						serializedName: "releases",
						constraints: {
							MinItems: 1,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ReleaseWithDistributionGroupElementType",
								type: {
									name: "Composite",
									className: "ReleaseWithDistributionGroup",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = GetReleasesContainer;
