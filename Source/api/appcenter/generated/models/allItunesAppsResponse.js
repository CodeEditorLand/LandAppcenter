/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Itunes teams details .
 *
 */
class AllItunesAppsResponse {
	/**
	 * Defines the metadata of AllItunesAppsResponse
	 *
	 * @returns {object} metadata of AllItunesAppsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AllItunesAppsResponse",
			type: {
				name: "Composite",
				className: "AllItunesAppsResponse",
				modelProperties: {
					appleId: {
						required: false,
						serializedName: "apple_id",
						type: {
							name: "String",
						},
					},
					bundleId: {
						required: false,
						serializedName: "bundle_id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					iconUrl: {
						required: false,
						serializedName: "iconUrl",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AllItunesAppsResponse;
