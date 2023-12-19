/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a BuildAgentQueue.
 */
class BuildAgentQueue {
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
