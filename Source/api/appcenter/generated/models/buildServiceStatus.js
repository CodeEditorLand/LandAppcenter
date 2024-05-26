/**
 * Class representing a BuildServiceStatus.
 */
class BuildServiceStatus {
	/**
	 * Create a BuildServiceStatus.
	 * @member {string} [status]
	 * @member {string} [service]
	 * @member {string} [message]
	 * @member {string} [url]
	 * @member {number} [validUntil]
	 * @member {string} [os]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildServiceStatus
	 *
	 * @returns {object} metadata of BuildServiceStatus
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildServiceStatus",
			type: {
				name: "Composite",
				className: "BuildServiceStatus",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					service: {
						required: false,
						serializedName: "service",
						type: {
							name: "String",
						},
					},
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
					url: {
						required: false,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
					validUntil: {
						required: false,
						serializedName: "valid_until",
						type: {
							name: "Number",
						},
					},
					os: {
						required: false,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BuildServiceStatus;
