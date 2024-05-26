/**
 * Class representing a StoresBasicDetails.
 */
class StoresBasicDetails {
	/**
	 * Create a StoresBasicDetails.
	 * @member {string} [id] ID identifying a unique distribution store.
	 * @member {string} [name] A name identifying a unique distribution store.
	 * @member {string} [type] type of the distribution store currently stores
	 * type can be intune or googleplay. Possible values include: 'intune',
	 * 'googleplay', 'windows'
	 * @member {string} [publishingStatus] publishing status of the release in
	 * the store.
	 */
	constructor() {}

	/**
	 * Defines the metadata of StoresBasicDetails
	 *
	 * @returns {object} metadata of StoresBasicDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StoresBasicDetails",
			type: {
				name: "Composite",
				className: "StoresBasicDetails",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
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
				},
			},
		};
	}
}

module.exports = StoresBasicDetails;
