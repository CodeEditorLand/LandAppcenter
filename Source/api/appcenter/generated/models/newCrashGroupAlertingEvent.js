const models = require("./index");

/**
 * New crash group alerting event
 *
 * @extends models['AlertingEvent']
 */
class NewCrashGroupAlertingEvent extends models["AlertingEvent"] {
	/**
	 * Create a NewCrashGroupAlertingEvent.
	 * @member {object} [crashGroupProperties] Properties of new crash group
	 * @member {string} [crashGroupProperties.id]
	 * @member {string} [crashGroupProperties.name]
	 * @member {string} [crashGroupProperties.reason]
	 * @member {string} [crashGroupProperties.url]
	 * @member {string} [crashGroupProperties.appDisplayName]
	 * @member {string} [crashGroupProperties.appPlatform]
	 * @member {string} [crashGroupProperties.appVersion]
	 * @member {array} [crashGroupProperties.stackTrace]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NewCrashGroupAlertingEvent
	 *
	 * @returns {object} metadata of NewCrashGroupAlertingEvent
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NewCrashGroupAlertingEvent",
			type: {
				name: "Composite",
				className: "NewCrashGroupAlertingEvent",
				modelProperties: {
					eventTimestamp: {
						required: true,
						serializedName: "event_timestamp",
						type: {
							name: "String",
						},
					},
					eventId: {
						required: true,
						serializedName: "event_id",
						type: {
							name: "String",
						},
					},
					properties: {
						required: false,
						serializedName: "properties",
						type: {
							name: "Object",
						},
					},
					crashGroupProperties: {
						required: false,
						serializedName: "crash_group_properties",
						type: {
							name: "Composite",
							className:
								"NewCrashGroupAlertingEventCrashGroupProperties",
						},
					},
				},
			},
		};
	}
}

module.exports = NewCrashGroupAlertingEvent;
