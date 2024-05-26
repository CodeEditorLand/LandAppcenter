/**
 * A unique identifier for a destination. A destination can be identified by an
 * ID (guid) or by a name. DestinationId encapsulates both options. A
 * destination can be either a distribution group or a store.
 *
 */
class DestinationId {
	/**
	 * Create a DestinationId.
	 * @member {string} [name] Name of a distribution group / distribution store.
	 * The release will be associated with this distribution group or store. If
	 * the distribution group / store doesn't exist a 400 is returned. If both
	 * distribution group / store name and id are passed, the id is taking
	 * precedence.
	 * @member {string} [id] Id of a distribution group / store. The release will
	 * be associated with this distribution group / store. If the distribution
	 * group / store doesn't exist a 400 is returned. If both distribution group
	 * / store name and id are passed, the id is taking precedence.
	 */
	constructor() {}

	/**
	 * Defines the metadata of DestinationId
	 *
	 * @returns {object} metadata of DestinationId
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DestinationId",
			type: {
				name: "Composite",
				className: "DestinationId",
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
				},
			},
		};
	}
}

module.exports = DestinationId;
