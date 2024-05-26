const msRest = require("ms-rest");
const ServiceClient = msRest.ServiceClient;

const models = require("./models");
const operations = require("./operations");

/** Class representing a AppCenterClient. */
class AppCenterClient extends ServiceClient {
	/**
	 * Create a AppCenterClient.
	 * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
	 * @param {string} [baseUri] - The base URI of the service.
	 * @param {object} [options] - The parameter options
	 * @param {Array} [options.filters] - Filters to be added to the request pipeline
	 * @param {object} [options.requestOptions] - Options for the underlying request object
	 * {@link https://github.com/request/request#requestoptions-callback Options doc}
	 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
	 */
	constructor(credentials, baseUri, options) {
		if (credentials === null || credentials === undefined) {
			throw new Error("'credentials' cannot be null.");
		}

		if (!options) options = {};

		super(credentials, options);

		this.baseUri = baseUri;
		if (!this.baseUri) {
			this.baseUri = "https://api.appcenter.ms";
		}
		this.credentials = credentials;

		const packageInfo = this.getPackageJsonInfo(__dirname);
		this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
		this.devices = new operations.Devices(this);
		this.orgInvitations = new operations.OrgInvitations(this);
		this.distributionGroupInvitations =
			new operations.DistributionGroupInvitations(this);
		this.appInvitations = new operations.AppInvitations(this);
		this.users = new operations.Users(this);
		this.releases = new operations.Releases(this);
		this.teams = new operations.Teams(this);
		this.azureSubscription = new operations.AzureSubscription(this);
		this.apps = new operations.Apps(this);
		this.organizations = new operations.Organizations(this);
		this.builds = new operations.Builds(this);
		this.crashes = new operations.Crashes(this);
		this.test = new operations.Test(this);
		this.symbols = new operations.Symbols(this);
		this.symbolUploads = new operations.SymbolUploads(this);
		this.missingSymbolGroups = new operations.MissingSymbolGroups(this);
		this.repositories = new operations.Repositories(this);
		this.repositoryConfigurations = new operations.RepositoryConfigurations(
			this,
		);
		this.provisioning = new operations.Provisioning(this);
		this.releaseUploads = new operations.ReleaseUploads(this);
		this.push = new operations.Push(this);
		this.fileAssets = new operations.FileAssets(this);
		this.exportConfigurations = new operations.ExportConfigurations(this);
		this.storeReleases = new operations.StoreReleases(this);
		this.stores = new operations.Stores(this);
		this.distributionGroups = new operations.DistributionGroups(this);
		this.codePushDeploymentRelease =
			new operations.CodePushDeploymentRelease(this);
		this.deploymentReleases = new operations.DeploymentReleases(this);
		this.codePushDeploymentReleases =
			new operations.CodePushDeploymentReleases(this);
		this.codePushDeployments = new operations.CodePushDeployments(this);
		this.codePushDeploymentMetrics =
			new operations.CodePushDeploymentMetrics(this);
		this.crashGroups = new operations.CrashGroups(this);
		this.commits = new operations.Commits(this);
		this.branchConfigurations = new operations.BranchConfigurations(this);
		this.appleMapping = new operations.AppleMapping(this);
		this.analytics = new operations.Analytics(this);
		this.apiTokens = new operations.ApiTokens(this);
		this.models = models;
		msRest.addSerializationMixin(this);
	}
}

module.exports = AppCenterClient;
