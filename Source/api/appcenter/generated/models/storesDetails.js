/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a StoresDetails.
 */
class StoresDetails {
	/**
	 * Defines the metadata of StoresDetails
	 *
	 * @returns {object} metadata of StoresDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StoresDetails",
			type: {
				name: "Composite",
				className: "StoresDetails",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
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
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					publishingStatus: {
						required: false,
						serializedName: "publishing_status",
						type: {
							name: "String",
						},
					},
					isLatest: {
						required: false,
						serializedName: "is_latest",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = StoresDetails;
