/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * parked crash
 *
 */
class ParkedCrash {
	/**
	 * Create a ParkedCrash.
	 * @member {string} appId application id
	 * @member {string} appVer application version
	 * @member {string} appBuild application build
	 * @member {array} missingSymbols list of missing symbols
	 * @member {string} crashId id of the crash
	 * @member {string} sdkPlatform platform of the sdk that sent crash
	 * @member {string} [sdkWrapper] name of the sdk wrapper that sent crash
	 * @member {object} location crash location
	 * @member {string} [location.account] azure account
	 * @member {string} [location.container] blob container
	 * @member {string} [location.blob] blob name
	 */
	constructor() {}

	/**
	 * Defines the metadata of ParkedCrash
	 *
	 * @returns {object} metadata of ParkedCrash
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ParkedCrash",
			type: {
				name: "Composite",
				className: "ParkedCrash",
				modelProperties: {
					appId: {
						required: true,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
					appVer: {
						required: true,
						serializedName: "app_ver",
						type: {
							name: "String",
						},
					},
					appBuild: {
						required: true,
						serializedName: "app_build",
						type: {
							name: "String",
						},
					},
					missingSymbols: {
						required: true,
						serializedName: "missing_symbols",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "MissingSymbolElementType",
								type: {
									name: "Composite",
									className: "MissingSymbol",
								},
							},
						},
					},
					crashId: {
						required: true,
						serializedName: "crash_id",
						type: {
							name: "String",
						},
					},
					sdkPlatform: {
						required: true,
						serializedName: "sdk_platform",
						type: {
							name: "String",
						},
					},
					sdkWrapper: {
						required: false,
						serializedName: "sdk_wrapper",
						type: {
							name: "String",
						},
					},
					location: {
						required: true,
						serializedName: "location",
						type: {
							name: "Composite",
							className: "CrashLocation",
						},
					},
				},
			},
		};
	}
}

module.exports = ParkedCrash;
