/**
 * Agent queue
 *
 */
class AgentQueueResponse {
	/**
	 * Create a AgentQueueResponse.
	 * @member {number} [id]
	 * @member {string} [name]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AgentQueueResponse
	 *
	 * @returns {object} metadata of AgentQueueResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AgentQueueResponse",
			type: {
				name: "Composite",
				className: "AgentQueueResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AgentQueueResponse;
