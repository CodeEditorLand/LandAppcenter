/**
 * Class representing a Model.
 */
class Model {
	/**
	 * Create a Model.
	 * @member {string} [modelName] model's name
	 * @member {number} [count] count current of model
	 * @member {number} [previousCount] count of previous model
	 */
	constructor() {}

	/**
	 * Defines the metadata of Model
	 *
	 * @returns {object} metadata of Model
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Model",
			type: {
				name: "Composite",
				className: "Model",
				modelProperties: {
					modelName: {
						required: false,
						serializedName: "model_name",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					previousCount: {
						required: false,
						serializedName: "previous_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Model;
