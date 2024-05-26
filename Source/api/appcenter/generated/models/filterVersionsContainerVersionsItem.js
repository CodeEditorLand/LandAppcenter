/**
 * Class representing a FilterVersionsContainerVersionsItem.
 */
class FilterVersionsContainerVersionsItem {
	/**
	 * Create a FilterVersionsContainerVersionsItem.
	 * @member {string} version App version
	 * @member {string} build App build number
	 */
	constructor() {}

	/**
	 * Defines the metadata of FilterVersionsContainerVersionsItem
	 *
	 * @returns {object} metadata of FilterVersionsContainerVersionsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FilterVersionsContainer_versionsItem",
			type: {
				name: "Composite",
				className: "FilterVersionsContainerVersionsItem",
				modelProperties: {
					version: {
						required: true,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					build: {
						required: true,
						serializedName: "build",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = FilterVersionsContainerVersionsItem;
