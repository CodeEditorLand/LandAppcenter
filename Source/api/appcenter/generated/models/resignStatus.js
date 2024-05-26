/**
 * The status of the resign operation.
 *
 */
class ResignStatus {
	/**
	 * Create a ResignStatus.
	 * @member {string} status The status of the resign
	 * @member {string} [errorCode] Error code for any error that occured during
	 * the resigning operation.
	 * @member {string} [errorMessage] Error message for any error that occured
	 * during the resigning operation.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ResignStatus
	 *
	 * @returns {object} metadata of ResignStatus
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ResignStatus",
			type: {
				name: "Composite",
				className: "ResignStatus",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					errorCode: {
						required: false,
						serializedName: "error_code",
						type: {
							name: "String",
						},
					},
					errorMessage: {
						required: false,
						serializedName: "error_message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ResignStatus;
