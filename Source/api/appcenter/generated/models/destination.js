/**
 * Class representing a Destination.
 */
class Destination {
	/**
	 * Create a Destination.
	 * @member {boolean} [isLatest] Is the containing release the latest one in
	 * this distribution group.
	 * @member {string} [type] type of the distribution store currently stores
	 * type can be intune, googleplay or windows. Possible values include:
	 * 'intune', 'googleplay', 'windows'
	 * @member {string} [publishingStatus] publishing status of the release in
	 * the store.
	 * @member {string} [destinationType] Destination can be either store or
	 * group. Possible values include: 'group', 'store'
	 */
	constructor() {}

	/**
	 * Defines the metadata of Destination
	 *
	 * @returns {object} metadata of Destination
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Destination",
			type: {
				name: "Composite",
				className: "Destination",
				modelProperties: {
					isLatest: {
						required: false,
						serializedName: "is_latest",
						type: {
							name: "Boolean",
						},
					},
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					publishingStatus: {
						required: false,
						serializedName: "publishing_status",
						type: {
							name: "String",
						},
					},
					destinationType: {
						required: false,
						serializedName: "destination_type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Destination;
