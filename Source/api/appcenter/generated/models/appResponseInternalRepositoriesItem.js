/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a AppResponseInternalRepositoriesItem.
 */
class AppResponseInternalRepositoriesItem {
	/**
	 * Defines the metadata of AppResponseInternalRepositoriesItem
	 *
	 * @returns {object} metadata of AppResponseInternalRepositoriesItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppResponseInternal_repositoriesItem",
			type: {
				name: "Composite",
				className: "AppResponseInternalRepositoriesItem",
				modelProperties: {
					repoProvider: {
						required: false,
						serializedName: "repo_provider",
						type: {
							name: "String",
						},
					},
					repoUrl: {
						required: false,
						serializedName: "repo_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppResponseInternalRepositoriesItem;
