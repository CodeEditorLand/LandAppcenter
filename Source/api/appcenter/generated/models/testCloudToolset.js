const models = require("./index");

/**
 * Class representing a TestCloudToolset.
 */
class TestCloudToolset {
	/**
	 * Create a TestCloudToolset.
	 * @member {array} projects The TestCloud projects detected
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudToolset
	 *
	 * @returns {object} metadata of TestCloudToolset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudToolset",
			type: {
				name: "Composite",
				className: "TestCloudToolset",
				modelProperties: {
					projects: {
						required: true,
						serializedName: "projects",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "TestCloudProjectElementType",
								type: {
									name: "Composite",
									className: "TestCloudProject",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudToolset;
