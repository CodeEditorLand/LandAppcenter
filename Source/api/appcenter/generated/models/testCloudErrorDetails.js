/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * @summary Test Cloud Error Details
 *
 * Details of a failed operation
 *
 */
class TestCloudErrorDetails {
	/**
	 * Defines the metadata of TestCloudErrorDetails
	 *
	 * @returns {object} metadata of TestCloudErrorDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudErrorDetails",
			type: {
				name: "Composite",
				className: "TestCloudErrorDetails",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudErrorDetails;
