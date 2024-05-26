/**
 * Class representing a CrashGroupModel.
 */
class CrashGroupModel {
	/**
	 * Create a CrashGroupModel.
	 * @member {string} [modelName] model's name
	 * @member {number} [crashCount] count of model
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupModel
	 *
	 * @returns {object} metadata of CrashGroupModel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupModel",
			type: {
				name: "Composite",
				className: "CrashGroupModel",
				modelProperties: {
					modelName: {
						required: false,
						serializedName: "model_name",
						type: {
							name: "String",
						},
					},
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupModel;
