const models = require("./index");

/**
 * Repostiory object
 *
 */
class AlertBugTrackerRepo {
	/**
	 * Create a AlertBugTrackerRepo.
	 * @member {string} name
	 * @member {string} url
	 * @member {string} id
	 * @member {string} [description]
	 * @member {boolean} [privateProperty]
	 * @member {object} [owner]
	 * @member {string} [owner.name]
	 * @member {string} [owner.id]
	 * @member {string} [owner.login]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertBugTrackerRepo
	 *
	 * @returns {object} metadata of AlertBugTrackerRepo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertBugTrackerRepo",
			type: {
				name: "Composite",
				className: "AlertBugTrackerRepo",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					url: {
						required: true,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					privateProperty: {
						required: false,
						serializedName: "private",
						type: {
							name: "Boolean",
						},
					},
					owner: {
						required: false,
						serializedName: "owner",
						type: {
							name: "Composite",
							className: "AlertBugTrackerRepoOwner",
						},
					},
				},
			},
		};
	}
}

module.exports = AlertBugTrackerRepo;
