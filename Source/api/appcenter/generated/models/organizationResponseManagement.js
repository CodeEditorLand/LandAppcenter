const models = require("./index");

/**
 * Class representing a OrganizationResponseManagement.
 * @extends models['OrganizationResponseInternal']
 */
class OrganizationResponseManagement extends models[
	"OrganizationResponseInternal"
] {
	/**
	 * Create a OrganizationResponseManagement.
	 * @member {string} [email] The organization email, if the app was synced
	 * from HockeyApp
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of OrganizationResponseManagement
	 *
	 * @returns {object} metadata of OrganizationResponseManagement
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationResponseManagement",
			type: {
				name: "Composite",
				className: "OrganizationResponseManagement",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
					createdAt: {
						required: true,
						serializedName: "created_at",
						type: {
							name: "String",
						},
					},
					updatedAt: {
						required: true,
						serializedName: "updated_at",
						type: {
							name: "String",
						},
					},
					featureFlags: {
						required: false,
						serializedName: "feature_flags",
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
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationResponseManagement;
