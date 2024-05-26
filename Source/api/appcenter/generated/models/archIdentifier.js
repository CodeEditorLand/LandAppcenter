/**
 * An object containing a UUID for an architecture for an iOS app.
 *
 */
class ArchIdentifier {
	/**
	 * Create a ArchIdentifier.
	 * @member {string} architecture The architecture that the UUID belongs to,
	 * i.e. armv7 or arm64.
	 * @member {uuid} uuid The unique identifier.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ArchIdentifier
	 *
	 * @returns {object} metadata of ArchIdentifier
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ArchIdentifier",
			type: {
				name: "Composite",
				className: "ArchIdentifier",
				modelProperties: {
					architecture: {
						required: true,
						serializedName: "architecture",
						type: {
							name: "String",
						},
					},
					uuid: {
						required: true,
						serializedName: "uuid",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ArchIdentifier;
