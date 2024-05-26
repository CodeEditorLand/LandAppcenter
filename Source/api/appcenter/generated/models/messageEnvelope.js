/**
 * Envelope for messages sent to actors
 *
 */
class MessageEnvelope {
	/**
	 * Create a MessageEnvelope.
	 * @member {string} [messageId] Unique id of the message
	 * @member {string} [messageType] Type of the message
	 * @member {object} [message] Body of the message
	 */
	constructor() {}

	/**
	 * Defines the metadata of MessageEnvelope
	 *
	 * @returns {object} metadata of MessageEnvelope
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "MessageEnvelope",
			type: {
				name: "Composite",
				className: "MessageEnvelope",
				modelProperties: {
					messageId: {
						required: false,
						serializedName: "messageId",
						type: {
							name: "String",
						},
					},
					messageType: {
						required: false,
						serializedName: "messageType",
						type: {
							name: "String",
						},
					},
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = MessageEnvelope;
