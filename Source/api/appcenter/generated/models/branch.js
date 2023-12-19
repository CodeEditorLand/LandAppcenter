/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a Branch.
 */
class Branch {
	/**
	 * Defines the metadata of Branch
	 *
	 * @returns {object} metadata of Branch
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Branch",
			type: {
				name: "Composite",
				className: "Branch",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					commit: {
						required: true,
						serializedName: "commit",
						type: {
							name: "Composite",
							className: "Commit",
						},
					},
				},
			},
		};
	}
}

module.exports = Branch;
