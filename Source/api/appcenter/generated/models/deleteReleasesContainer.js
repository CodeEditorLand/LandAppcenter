const models = require("./index");

/**
 * Class representing a DeleteReleasesContainer.
 */
class DeleteReleasesContainer {
	/**
	 * Create a DeleteReleasesContainer.
	 * @member {array} releases
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeleteReleasesContainer
	 *
	 * @returns {object} metadata of DeleteReleasesContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeleteReleasesContainer",
			type: {
				name: "Composite",
				className: "DeleteReleasesContainer",
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

module.exports = DeleteReleasesContainer;
