const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Enable export configuration.
 *
 * @param {string} exportConfigurationId The id of the export configuration.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _enable(exportConfigurationId, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			exportConfigurationId === null ||
			exportConfigurationId === undefined ||
			typeof exportConfigurationId.valueOf() !== "string"
		) {
			throw new Error(
				"exportConfigurationId cannot be null or undefined and it must be of type string.",
			);
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}/enable";
	requestUrl = requestUrl.replace(
		"{export_configuration_id}",
		encodeURIComponent(exportConfigurationId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
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
						"ErrorResponse"
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
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Disable export configuration.
 *
 * @param {string} exportConfigurationId The id of the export configuration.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _disable(
	exportConfigurationId,
	ownerName,
	appName,
	options,
	callback,
) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			exportConfigurationId === null ||
			exportConfigurationId === undefined ||
			typeof exportConfigurationId.valueOf() !== "string"
		) {
			throw new Error(
				"exportConfigurationId cannot be null or undefined and it must be of type string.",
			);
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}/disable";
	requestUrl = requestUrl.replace(
		"{export_configuration_id}",
		encodeURIComponent(exportConfigurationId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
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
						"ErrorResponse"
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
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Get export configuration.
 *
 * @param {string} exportConfigurationId The id of the export configuration.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExportConfigurationResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(exportConfigurationId, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			exportConfigurationId === null ||
			exportConfigurationId === undefined ||
			typeof exportConfigurationId.valueOf() !== "string"
		) {
			throw new Error(
				"exportConfigurationId cannot be null or undefined and it must be of type string.",
			);
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}";
	requestUrl = requestUrl.replace(
		"{export_configuration_id}",
		encodeURIComponent(exportConfigurationId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

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
						"ErrorResponse"
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
					const resultMapper = new client.models[
						"ExportConfigurationResult"
					]().mapper();
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

/**
 * Partially update export configuration.
 *
 * @param {string} exportConfigurationId The id of the export configuration.
 *
 * @param {object} properties Export configurations.
 *
 * @param {string} [properties.resourceName] The resource name on azure
 *
 * @param {string} [properties.resourceGroup] The resource group name on azure
 *
 * @param {string} properties.type Polymorphic Discriminator
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExportConfigurationResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _partialUpdate(
	exportConfigurationId,
	properties,
	ownerName,
	appName,
	options,
	callback,
) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			exportConfigurationId === null ||
			exportConfigurationId === undefined ||
			typeof exportConfigurationId.valueOf() !== "string"
		) {
			throw new Error(
				"exportConfigurationId cannot be null or undefined and it must be of type string.",
			);
		}
		if (properties === null || properties === undefined) {
			throw new Error("properties cannot be null or undefined.");
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}";
	requestUrl = requestUrl.replace(
		"{export_configuration_id}",
		encodeURIComponent(exportConfigurationId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "PATCH";
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
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (properties !== null && properties !== undefined) {
			const requestModelMapper = new client.models[
				"ExportConfiguration"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				properties,
				"properties",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(properties, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
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
						"ErrorResponse"
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
					const resultMapper = new client.models[
						"ExportConfigurationResult"
					]().mapper();
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

/**
 * Delete export configuration.
 *
 * @param {string} exportConfigurationId The id of the export configuration.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(
	exportConfigurationId,
	ownerName,
	appName,
	options,
	callback,
) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			exportConfigurationId === null ||
			exportConfigurationId === undefined ||
			typeof exportConfigurationId.valueOf() !== "string"
		) {
			throw new Error(
				"exportConfigurationId cannot be null or undefined and it must be of type string.",
			);
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}";
	requestUrl = requestUrl.replace(
		"{export_configuration_id}",
		encodeURIComponent(exportConfigurationId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "DELETE";
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
						"ErrorResponse"
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
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * List export configurations.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExportConfigurationListResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

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
						"ErrorResponse"
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
					const resultMapper = new client.models[
						"ExportConfigurationListResult"
					]().mapper();
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

/**
 * Create new export configuration
 *
 * @param {object} properties Export configurations.
 *
 * @param {string} [properties.resourceName] The resource name on azure
 *
 * @param {string} [properties.resourceGroup] The resource group name on azure
 *
 * @param {string} properties.type Polymorphic Discriminator
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExportConfigurationResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _create(properties, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (properties === null || properties === undefined) {
			throw new Error("properties cannot be null or undefined.");
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
		"v0.1/apps/{owner_name}/{app_name}/export_configurations";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
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
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (properties !== null && properties !== undefined) {
			const requestModelMapper = new client.models[
				"ExportConfiguration"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				properties,
				"properties",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(properties, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 202) {
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
						"ErrorResponse"
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
		if (statusCode === 202) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ExportConfigurationResult"
					]().mapper();
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

/** Class representing a ExportConfigurations. */
class ExportConfigurations {
	/**
	 * Create a ExportConfigurations.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._enable = _enable;
		this._disable = _disable;
		this._get = _get;
		this._partialUpdate = _partialUpdate;
		this._deleteMethod = _deleteMethod;
		this._list = _list;
		this._create = _create;
	}

	/**
	 * Enable export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	enableWithHttpOperationResponse(
		exportConfigurationId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._enable(
				exportConfigurationId,
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
	 * Enable export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	enable(
		exportConfigurationId,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._enable(
				exportConfigurationId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._enable(
					exportConfigurationId,
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

	/**
	 * Disable export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	disableWithHttpOperationResponse(
		exportConfigurationId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._disable(
				exportConfigurationId,
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
	 * Disable export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	disable(
		exportConfigurationId,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._disable(
				exportConfigurationId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._disable(
					exportConfigurationId,
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

	/**
	 * Get export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<ExportConfigurationResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(
		exportConfigurationId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._get(
				exportConfigurationId,
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
	 * Get export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {ExportConfigurationResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link ExportConfigurationResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	get(exportConfigurationId, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._get(
				exportConfigurationId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._get(
					exportConfigurationId,
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

	/**
	 * Partially update export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {object} properties Export configurations.
	 *
	 * @param {string} [properties.resourceName] The resource name on azure
	 *
	 * @param {string} [properties.resourceGroup] The resource group name on azure
	 *
	 * @param {string} properties.type Polymorphic Discriminator
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<ExportConfigurationResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	partialUpdateWithHttpOperationResponse(
		exportConfigurationId,
		properties,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._partialUpdate(
				exportConfigurationId,
				properties,
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
	 * Partially update export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {object} properties Export configurations.
	 *
	 * @param {string} [properties.resourceName] The resource name on azure
	 *
	 * @param {string} [properties.resourceGroup] The resource group name on azure
	 *
	 * @param {string} properties.type Polymorphic Discriminator
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {ExportConfigurationResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link ExportConfigurationResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	partialUpdate(
		exportConfigurationId,
		properties,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._partialUpdate(
				exportConfigurationId,
				properties,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._partialUpdate(
					exportConfigurationId,
					properties,
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

	/**
	 * Delete export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteMethodWithHttpOperationResponse(
		exportConfigurationId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteMethod(
				exportConfigurationId,
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
	 * Delete export configuration.
	 *
	 * @param {string} exportConfigurationId The id of the export configuration.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	deleteMethod(
		exportConfigurationId,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteMethod(
				exportConfigurationId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteMethod(
					exportConfigurationId,
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

	/**
	 * List export configurations.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<ExportConfigurationListResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	listWithHttpOperationResponse(ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._list(
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
	 * List export configurations.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {ExportConfigurationListResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link ExportConfigurationListResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	list(ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._list(ownerName, appName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._list(
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

	/**
	 * Create new export configuration
	 *
	 * @param {object} properties Export configurations.
	 *
	 * @param {string} [properties.resourceName] The resource name on azure
	 *
	 * @param {string} [properties.resourceGroup] The resource group name on azure
	 *
	 * @param {string} properties.type Polymorphic Discriminator
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<ExportConfigurationResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	createWithHttpOperationResponse(properties, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._create(
				properties,
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
	 * Create new export configuration
	 *
	 * @param {object} properties Export configurations.
	 *
	 * @param {string} [properties.resourceName] The resource name on azure
	 *
	 * @param {string} [properties.resourceGroup] The resource group name on azure
	 *
	 * @param {string} properties.type Polymorphic Discriminator
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
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
	 *                      @resolve {ExportConfigurationResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link ExportConfigurationResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	create(properties, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._create(
				properties,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._create(
					properties,
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

module.exports = ExportConfigurations;
