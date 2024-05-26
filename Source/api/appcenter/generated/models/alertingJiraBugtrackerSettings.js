const models = require("./index");

/**
 * Jira bugtracker specific settings
 *
 * @extends models['AlertingBugtrackerSettings']
 */
class AlertingJiraBugtrackerSettings extends models[
	"AlertingBugtrackerSettings"
] {
	/**
	 * Create a AlertingJiraBugtrackerSettings.
	 * @member {number} jiraProjectId
	 * @member {string} jiraProjectName
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AlertingJiraBugtrackerSettings
	 *
	 * @returns {object} metadata of AlertingJiraBugtrackerSettings
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "jira",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "AlertingBugtrackerSettings",
				className: "AlertingJiraBugtrackerSettings",
				modelProperties: {
					callbackUrl: {
						required: false,
						serializedName: "callback_url",
						type: {
							name: "String",
						},
					},
					ownerName: {
						required: true,
						serializedName: "owner_name",
						type: {
							name: "String",
						},
					},
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					jiraProjectId: {
						required: true,
						serializedName: "jira_project_id",
						type: {
							name: "Number",
						},
					},
					jiraProjectName: {
						required: true,
						serializedName: "jira_project_name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AlertingJiraBugtrackerSettings;
