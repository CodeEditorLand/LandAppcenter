const models = require("./index");

/**
 * Class representing a DistributionGroup.
 * @extends models['DestinationId']
 */
class DistributionGroup extends models["DestinationId"] {
	/**
	 * Create a DistributionGroup.
	 * @member {boolean} [isLatest] Is the containing release the latest one in
	 * this distribution group.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of DistributionGroup
	 *
	 * @returns {object} metadata of DistributionGroup
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroup",
			type: {
				name: "Composite",
				className: "DistributionGroup",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
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
					isLatest: {
						required: false,
						serializedName: "is_latest",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionGroup;
