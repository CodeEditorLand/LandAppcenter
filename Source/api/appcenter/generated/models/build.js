/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a Build.
 */
class Build {
	/**
	 * Create a Build.
	 * @member {number} id The build ID
	 * @member {string} buildNumber The build number
	 * @member {string} queueTime The time the build was queued
	 * @member {string} [startTime] The time the build was started
	 * @member {string} [finishTime] The time the build was finished
	 * @member {string} [lastChangedDate] The time the build status was last
	 * changed
	 * @member {string} status The build status
	 * @member {string} result The build result
	 * @member {string} sourceBranch The source branch name
	 * @member {string} sourceVersion The source SHA
	 */
	constructor() {}

	/**
	 * Defines the metadata of Build
	 *
	 * @returns {object} metadata of Build
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Build",
			type: {
				name: "Composite",
				className: "Build",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						constraints: {
							ExclusiveMinimum: 0,
						},
						type: {
							name: "Number",
						},
					},
					buildNumber: {
						required: true,
						serializedName: "buildNumber",
						type: {
							name: "String",
						},
					},
					queueTime: {
						required: true,
						serializedName: "queueTime",
						type: {
							name: "String",
						},
					},
					startTime: {
						required: false,
						serializedName: "startTime",
						type: {
							name: "String",
						},
					},
					finishTime: {
						required: false,
						serializedName: "finishTime",
						type: {
							name: "String",
						},
					},
					lastChangedDate: {
						required: false,
						serializedName: "lastChangedDate",
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
					result: {
						required: true,
						serializedName: "result",
						type: {
							name: "String",
						},
					},
					sourceBranch: {
						required: true,
						serializedName: "sourceBranch",
						type: {
							name: "String",
						},
					},
					sourceVersion: {
						required: true,
						serializedName: "sourceVersion",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Build;
