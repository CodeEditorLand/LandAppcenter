/**
 * Class representing a AlertingCrashGroup.
 */
class AlertingCrashGroup {
	/**
	 * Create a AlertingCrashGroup.
	 * @member {string} [url]
	 * @member {string} [appDisplayName]
	 * @member {string} [appPlatform] SDK/Platform this thread is beeing
	 * generated from. Possible values include: 'ios', 'android', 'xamarin',
	 * 'react-native', 'ndk', 'unity', 'other'
	 * @member {string} [appVersion]
	 * @member {string} [id]
	 * @member {string} [name]
	 * @member {string} [reason]
	 * @member {array} [stackTrace]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertingCrashGroup
	 *
	 * @returns {object} metadata of AlertingCrashGroup
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertingCrashGroup",
			type: {
				name: "Composite",
				className: "AlertingCrashGroup",
				modelProperties: {
					url: {
						required: false,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
					appDisplayName: {
						required: false,
						serializedName: "app_display_name",
						type: {
							name: "String",
						},
					},
					appPlatform: {
						required: false,
						serializedName: "app_platform",
						type: {
							name: "String",
						},
					},
					appVersion: {
						required: false,
						serializedName: "app_version",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					reason: {
						required: false,
						serializedName: "reason",
						type: {
							name: "String",
						},
					},
					stackTrace: {
						required: false,
						serializedName: "stack_trace",
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

module.exports = AlertingCrashGroup;
