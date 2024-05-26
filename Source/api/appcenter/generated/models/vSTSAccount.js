const models = require("./index");

/**
 * VSTS account with projects list and user info
 *
 */
class VSTSAccount {
	/**
	 * Create a VSTSAccount.
	 * @member {string} [accountId] Account id
	 * @member {string} [accountUri] Account uri
	 * @member {string} [accountName] Account name
	 * @member {string} [accountType] Account type
	 * @member {string} [accountStatus] Account status
	 * @member {object} [user]
	 * @member {string} [user.id] Profile id
	 * @member {string} [user.displayName] Profile display name
	 * @member {string} [user.publicAlias] Profile alias
	 * @member {string} [user.emailAddress] Profile email
	 * @member {array} [projects] Account projects
	 */
	constructor() {}

	/**
	 * Defines the metadata of VSTSAccount
	 *
	 * @returns {object} metadata of VSTSAccount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "VSTSAccount",
			type: {
				name: "Composite",
				className: "VSTSAccount",
				modelProperties: {
					accountId: {
						required: false,
						serializedName: "accountId",
						type: {
							name: "String",
						},
					},
					accountUri: {
						required: false,
						serializedName: "accountUri",
						type: {
							name: "String",
						},
					},
					accountName: {
						required: false,
						serializedName: "accountName",
						type: {
							name: "String",
						},
					},
					accountType: {
						required: false,
						serializedName: "accountType",
						type: {
							name: "String",
						},
					},
					accountStatus: {
						required: false,
						serializedName: "accountStatus",
						type: {
							name: "String",
						},
					},
					user: {
						required: false,
						serializedName: "user",
						type: {
							name: "Composite",
							className: "VSTSProfile",
						},
					},
					projects: {
						required: false,
						serializedName: "projects",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "VSTSProjectElementType",
								type: {
									name: "Composite",
									className: "VSTSProject",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = VSTSAccount;
