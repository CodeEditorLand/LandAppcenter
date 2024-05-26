const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Gets the repositories available from the source code host
 *
 * @param {string} sourceHost The source host. Possible values include:
 * 'github', 'bitbucket', 'vsts'
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.vstsAccountName] Filter repositories only for
 * specified account and project, "vstsProjectId" is required
 *
 * @param {string} [options.vstsProjectId] Filter repositories only for
 * specified account and project, "vstsAccountName" is required
 *
 * @param {string} [options.form] The selected form of the object. Possible
 * values include: 'lite', 'full'
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(sourceHost, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const vstsAccountName =
		options && options.vstsAccountName !== undefined
			? options.vstsAccountName
			: undefined;
	const vstsProjectId =
		options && options.vstsProjectId !== undefined
			? options.vstsProjectId
			: undefined;
	const form =
		options && options.form !== undefined ? options.form : undefined;
	// Validate
	try {
		if (
			sourceHost === null ||
			sourceHost === undefined ||
			typeof sourceHost.valueOf() !== "string"
		) {
			throw new Error(
				"sourceHost cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			vstsAccountName !== null &&
			vstsAccountName !== undefined &&
			typeof vstsAccountName.valueOf() !== "string"
		) {
			throw new Error("vstsAccountName must be of type string.");
		}
		if (
			vstsProjectId !== null &&
			vstsProjectId !== undefined &&
			typeof vstsProjectId.valueOf() !== "string"
		) {
			throw new Error("vstsProjectId must be of type string.");
		}
		if (
			form !== null &&
			form !== undefined &&
			typeof form.valueOf() !== "string"
		) {
			throw new Error("form must be of type string.");
		}
		if (
			ownerName === null ||
			ownerName === undefined ||
			typeof ownerName.valueOf() !== "string"
		) {
			throw new Error(
				"ownerName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/source_hosts/{source_host}/repositories";
	requestUrl = requestUrl.replace(
		"{source_host}",
		encodeURIComponent(sourceHost),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));
	const queryParameters = [];
	if (vstsAccountName !== null && vstsAccountName !== undefined) {
		queryParameters.push(
			"vstsAccountName=" + encodeURIComponent(vstsAccountName),
		);
	}
	if (vstsProjectId !== null && vstsProjectId !== undefined) {
		queryParameters.push(
			"vstsProjectId=" + encodeURIComponent(vstsProjectId),
		);
	}
	if (form !== null && form !== undefined) {
		queryParameters.push("form=" + encodeURIComponent(form));
	}
	if (queryParameters.length > 0) {
		requestUrl += "?" + queryParameters.join("&");
	}

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ValidationErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "SourceRepositoryElementType",
								type: {
									name: "Composite",
									className: "SourceRepository",
								},
							},
						},
					};
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/** Class representing a Repositories. */
class Repositories {
	/**
	 * Create a Repositories.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._list = _list;
	}

	/**
	 * Gets the repositories available from the source code host
	 *
	 * @param {string} sourceHost The source host. Possible values include:
	 * 'github', 'bitbucket', 'vsts'
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.vstsAccountName] Filter repositories only for
	 * specified account and project, "vstsProjectId" is required
	 *
	 * @param {string} [options.vstsProjectId] Filter repositories only for
	 * specified account and project, "vstsAccountName" is required
	 *
	 * @param {string} [options.form] The selected form of the object. Possible
	 * values include: 'lite', 'full'
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	listWithHttpOperationResponse(sourceHost, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._list(
				sourceHost,
				ownerName,
				appName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Gets the repositories available from the source code host
	 *
	 * @param {string} sourceHost The source host. Possible values include:
	 * 'github', 'bitbucket', 'vsts'
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.vstsAccountName] Filter repositories only for
	 * specified account and project, "vstsProjectId" is required
	 *
	 * @param {string} [options.vstsProjectId] Filter repositories only for
	 * specified account and project, "vstsAccountName" is required
	 *
	 * @param {string} [options.form] The selected form of the object. Possible
	 * values include: 'lite', 'full'
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {Array} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {array} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	list(sourceHost, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._list(
				sourceHost,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._list(
					sourceHost,
					ownerName,
					appName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}
}

module.exports = Repositories;
