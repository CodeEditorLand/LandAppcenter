/**
 * @summary Subscription Tier
 *
 */
class Tier {
	/**
	 * Create a Tier.
	 * @member {string} [name] The name of the tier
	 */
	constructor() {}

	/**
	 * Defines the metadata of Tier
	 *
	 * @returns {object} metadata of Tier
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Tier",
			type: {
				name: "Composite",
				className: "Tier",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Tier;
