/**
 * Event properties during the time range
 *
 */
class EventProperties {
	/**
	 * Create a EventProperties.
	 * @member {array} [eventProperties]
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventProperties
	 *
	 * @returns {object} metadata of EventProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventProperties",
			type: {
				name: "Composite",
				className: "EventProperties",
				modelProperties: {
					eventProperties: {
						required: false,
						serializedName: "event_properties",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = EventProperties;
