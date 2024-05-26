/**
 * missing symbol
 *
 */
class MissingSymbol {
	/**
	 * Create a MissingSymbol.
	 * @member {string} symbolId symbol id
	 * @member {string} name symbol name
	 * @member {string} [platform] symbol plarform
	 * @member {string} status symbol status. Possible values include: 'missing',
	 * 'ignored', 'available'
	 */
	constructor() {}

	/**
	 * Defines the metadata of MissingSymbol
	 *
	 * @returns {object} metadata of MissingSymbol
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "MissingSymbol",
			type: {
				name: "Composite",
				className: "MissingSymbol",
				modelProperties: {
					symbolId: {
						required: true,
						serializedName: "symbol_id",
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
					platform: {
						required: false,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = MissingSymbol;
