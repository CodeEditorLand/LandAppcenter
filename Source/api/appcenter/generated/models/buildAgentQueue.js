/**
 * Class representing a BuildAgentQueue.
 */
class BuildAgentQueue {
	/**
	 * Create a BuildAgentQueue.
	 * @member {string} queue
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildAgentQueue
	 *
	 * @returns {object} metadata of BuildAgentQueue
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildAgentQueue",
			type: {
				name: "Composite",
				className: "BuildAgentQueue",
				modelProperties: {
					queue: {
						required: true,
						serializedName: "queue",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BuildAgentQueue;
