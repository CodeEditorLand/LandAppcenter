/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a ErrorGroupState.
 */
class ErrorGroupState {
	/**
	 * Defines the metadata of ErrorGroupState
	 *
	 * @returns {object} metadata of ErrorGroupState
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroupState",
			type: {
				name: "Composite",
				className: "ErrorGroupState",
				modelProperties: {
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorGroupState;
