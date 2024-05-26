const models = require("./index");

/**
 * Class representing a FilterReleasesContainer.
 */
class FilterReleasesContainer {
	/**
	 * Create a FilterReleasesContainer.
	 * @member {array} [releases]
	 */
	constructor() {}

	/**
	 * Defines the metadata of FilterReleasesContainer
	 *
	 * @returns {object} metadata of FilterReleasesContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FilterReleasesContainer",
			type: {
				name: "Composite",
				className: "FilterReleasesContainer",
				modelProperties: {
					releases: {
						required: false,
						serializedName: "releases",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ReleaseElementType",
								type: {
									name: "Composite",
									className: "Release",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = FilterReleasesContainer;
