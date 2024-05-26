/**
 * AlertCrashGroup patching parameter
 *
 */
class AlertCrashGroupStateChange {
	/**
	 * Create a AlertCrashGroupStateChange.
	 * @member {string} [state] Possible values include: 'Open', 'Closed',
	 * 'Ignored'
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertCrashGroupStateChange
	 *
	 * @returns {object} metadata of AlertCrashGroupStateChange
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertCrashGroupStateChange",
			type: {
				name: "Composite",
				className: "AlertCrashGroupStateChange",
				modelProperties: {
					state: {
						required: false,
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

module.exports = AlertCrashGroupStateChange;
