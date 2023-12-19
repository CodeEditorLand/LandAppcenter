/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a AppRequest.
 */
class AppRequest {
	/**
	 * Defines the metadata of AppRequest
	 *
	 * @returns {object} metadata of AppRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppRequest",
			type: {
				name: "Composite",
				className: "AppRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
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
					os: {
						required: true,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
					platform: {
						required: true,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppRequest;
