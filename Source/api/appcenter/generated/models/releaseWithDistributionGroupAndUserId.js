const models = require("./index");

/**
 * Class representing a ReleaseWithDistributionGroupAndUserId.
 * @extends models['ReleaseWithDistributionGroup']
 */
class ReleaseWithDistributionGroupAndUserId extends models[
	"ReleaseWithDistributionGroup"
] {
	/**
	 * Create a ReleaseWithDistributionGroupAndUserId.
	 * @member {uuid} [userId] Unique user Id.  Will generate a new user Id if
	 * not provided.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ReleaseWithDistributionGroupAndUserId
	 *
	 * @returns {object} metadata of ReleaseWithDistributionGroupAndUserId
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseWithDistributionGroupAndUserId",
			type: {
				name: "Composite",
				className: "ReleaseWithDistributionGroupAndUserId",
				modelProperties: {
					release: {
						required: true,
						serializedName: "release",
						type: {
							name: "String",
						},
					},
					distributionGroup: {
						required: false,
						serializedName: "distribution_group",
						type: {
							name: "String",
						},
					},
					userId: {
						required: false,
						serializedName: "user_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseWithDistributionGroupAndUserId;
