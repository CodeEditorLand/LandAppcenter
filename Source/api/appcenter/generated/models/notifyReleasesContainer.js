const models = require("./index");

/**
 * Class representing a NotifyReleasesContainer.
 */
class NotifyReleasesContainer {
	/**
	 * Create a NotifyReleasesContainer.
	 * @member {array} releases
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotifyReleasesContainer
	 *
	 * @returns {object} metadata of NotifyReleasesContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotifyReleasesContainer",
			type: {
				name: "Composite",
				className: "NotifyReleasesContainer",
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
									"ReleaseWithDistributionGroupAndUserIdElementType",
								type: {
									name: "Composite",
									className:
										"ReleaseWithDistributionGroupAndUserId",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = NotifyReleasesContainer;
