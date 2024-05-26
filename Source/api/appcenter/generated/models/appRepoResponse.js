/**
 * Class representing a AppRepoResponse.
 */
class AppRepoResponse {
	/**
	 * Create a AppRepoResponse.
	 * @member {string} id The unique id (UUID) of the repository integration
	 * @member {string} appId The unique id (UUID) of the app that this
	 * repository integration belongs to
	 * @member {string} repoUrl The absolute URL of the repository
	 * @member {string} [repoProvider] The provider of the repository. Possible
	 * values include: 'github', 'bitbucket', 'vsts'
	 * @member {string} userId The unique id (UUID) of the user who configured
	 * the repository
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppRepoResponse
	 *
	 * @returns {object} metadata of AppRepoResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppRepoResponse",
			type: {
				name: "Composite",
				className: "AppRepoResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					appId: {
						required: true,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
					repoUrl: {
						required: true,
						serializedName: "repo_url",
						type: {
							name: "String",
						},
					},
					repoProvider: {
						required: false,
						serializedName: "repo_provider",
						type: {
							name: "String",
						},
					},
					userId: {
						required: true,
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

module.exports = AppRepoResponse;
