/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Returns the details of a single organization
 *
 * @param {string} orgName The organization's name
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
 *                      See {@link OrganizationResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(orgName, options, callback) {
	/* jshint validthis: true */
	let client = this.client;
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
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	let baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/orgs/{org_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));

	// Create HTTP transport objects
	let httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (let headerName in options["customHeaders"]) {
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
		let statusCode = response.statusCode;
		if (statusCode !== 200) {
			let error = new Error(responseBody);
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
					let resultMapper = new client.models[
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
					let resultMapper = new client.models[
						"OrganizationResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				let deserializationError = new Error(
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
 * Returns a list of organizations the requesting user has access to
 *
 * @param {string} orgName The organization's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.displayName] The full (friendly) name of the
 * organization.
 *
 * @param {string} [options.name] The name of the organization used in URLs
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
 *                      See {@link OrganizationResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(orgName, options, callback) {
	/* jshint validthis: true */
	let client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	let displayName =
		options && options.displayName !== undefined
			? options.displayName
			: undefined;
	let name = options && options.name !== undefined ? options.name : undefined;
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			displayName !== null &&
			displayName !== undefined &&
			typeof displayName.valueOf() !== "string"
		) {
			throw new Error("displayName must be of type string.");
		}
		if (
			name !== null &&
			name !== undefined &&
			typeof name.valueOf() !== "string"
		) {
			throw new Error("name must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let org;
	if (
		(displayName !== null && displayName !== undefined) ||
		(name !== null && name !== undefined)
	) {
		org = new client.models["OrganizationPatchRequest"]();
		org.displayName = displayName;
		org.name = name;
	}

	// Construct URL
	let baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/orgs/{org_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));

	// Create HTTP transport objects
	let httpRequest = new WebResource();
	httpRequest.method = "PATCH";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (let headerName in options["customHeaders"]) {
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
		if (org !== null && org !== undefined) {
			let requestModelMapper = new client.models[
				"OrganizationPatchRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, org, "org");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		let serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(org, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		let statusCode = response.statusCode;
		if (statusCode !== 200) {
			let error = new Error(responseBody);
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
					let resultMapper = new client.models[
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
					let resultMapper = new client.models[
						"OrganizationResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				let deserializationError = new Error(
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
 * Deletes a single organization
 *
 * @param {string} orgName The organization's name
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
function _deleteMethod(orgName, options, callback) {
	/* jshint validthis: true */
	let client = this.client;
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
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	let baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/orgs/{org_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));

	// Create HTTP transport objects
	let httpRequest = new WebResource();
	httpRequest.method = "DELETE";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (let headerName in options["customHeaders"]) {
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
		let statusCode = response.statusCode;
		if (statusCode !== 204) {
			let error = new Error(responseBody);
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
					let resultMapper = new client.models[
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

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Creates a new organization and returns it to the caller
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.displayName] The display name of the organization
 *
 * @param {string} [options.name] The name of the organization used in URLs
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
 *                      See {@link OrganizationResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createOrUpdate(options, callback) {
	/* jshint validthis: true */
	let client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	let displayName =
		options && options.displayName !== undefined
			? options.displayName
			: undefined;
	let name = options && options.name !== undefined ? options.name : undefined;
	// Validate
	try {
		if (
			displayName !== null &&
			displayName !== undefined &&
			typeof displayName.valueOf() !== "string"
		) {
			throw new Error("displayName must be of type string.");
		}
		if (
			name !== null &&
			name !== undefined &&
			typeof name.valueOf() !== "string"
		) {
			throw new Error("name must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let organization;
	if (
		(displayName !== null && displayName !== undefined) ||
		(name !== null && name !== undefined)
	) {
		organization = new client.models["OrganizationRequest"]();
		organization.displayName = displayName;
		organization.name = name;
	}

	// Construct URL
	let baseUrl = this.client.baseUri;
	let requestUrl = baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/orgs";

	// Create HTTP transport objects
	let httpRequest = new WebResource();
	httpRequest.method = "POST";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (let headerName in options["customHeaders"]) {
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
		if (organization !== null && organization !== undefined) {
			let requestModelMapper = new client.models[
				"OrganizationRequest"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				organization,
				"organization",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		let serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(organization, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		let statusCode = response.statusCode;
		if (statusCode !== 201) {
			let error = new Error(responseBody);
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
					let resultMapper = new client.models[
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
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					let resultMapper = new client.models[
						"OrganizationResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				let deserializationError = new Error(
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
 * Returns a list of organizations the requesting user has access to
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
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(options, callback) {
	/* jshint validthis: true */
	let client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}

	// Construct URL
	let baseUrl = this.client.baseUri;
	let requestUrl = baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/orgs";

	// Create HTTP transport objects
	let httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (let headerName in options["customHeaders"]) {
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
		let statusCode = response.statusCode;
		if (statusCode !== 200) {
			let error = new Error(responseBody);
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
					let resultMapper = new client.models[
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
					let resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ListOKResponseItemElementType",
								type: {
									name: "Composite",
									className: "ListOKResponseItem",
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
				let deserializationError = new Error(
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

/** Class representing a Organizations. */
class Organizations {
	/**
	 * Create a Organizations.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._get = _get;
		this._update = _update;
		this._deleteMethod = _deleteMethod;
		this._createOrUpdate = _createOrUpdate;
		this._list = _list;
	}

	/**
	 * Returns the details of a single organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<OrganizationResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(orgName, options) {
		let client = this.client;
		let self = this;
		return new Promise((resolve, reject) => {
			self._get(orgName, options, (err, result, request, response) => {
				let httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Returns the details of a single organization
	 *
	 * @param {string} orgName The organization's name
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
	 *                      @resolve {OrganizationResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link OrganizationResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	get(orgName, options, optionalCallback) {
		let client = this.client;
		let self = this;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (!optionalCallback) {
			return new Promise((resolve, reject) => {
				self._get(
					orgName,
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
		} else {
			return self._get(orgName, options, optionalCallback);
		}
	}

	/**
	 * Returns a list of organizations the requesting user has access to
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The full (friendly) name of the
	 * organization.
	 *
	 * @param {string} [options.name] The name of the organization used in URLs
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<OrganizationResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	updateWithHttpOperationResponse(orgName, options) {
		let client = this.client;
		let self = this;
		return new Promise((resolve, reject) => {
			self._update(orgName, options, (err, result, request, response) => {
				let httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Returns a list of organizations the requesting user has access to
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The full (friendly) name of the
	 * organization.
	 *
	 * @param {string} [options.name] The name of the organization used in URLs
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
	 *                      @resolve {OrganizationResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link OrganizationResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	update(orgName, options, optionalCallback) {
		let client = this.client;
		let self = this;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (!optionalCallback) {
			return new Promise((resolve, reject) => {
				self._update(
					orgName,
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
		} else {
			return self._update(orgName, options, optionalCallback);
		}
	}

	/**
	 * Deletes a single organization
	 *
	 * @param {string} orgName The organization's name
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
	deleteMethodWithHttpOperationResponse(orgName, options) {
		let client = this.client;
		let self = this;
		return new Promise((resolve, reject) => {
			self._deleteMethod(
				orgName,
				options,
				(err, result, request, response) => {
					let httpOperationResponse =
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
	 * Deletes a single organization
	 *
	 * @param {string} orgName The organization's name
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
	deleteMethod(orgName, options, optionalCallback) {
		let client = this.client;
		let self = this;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (!optionalCallback) {
			return new Promise((resolve, reject) => {
				self._deleteMethod(
					orgName,
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
		} else {
			return self._deleteMethod(orgName, options, optionalCallback);
		}
	}

	/**
	 * Creates a new organization and returns it to the caller
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The display name of the organization
	 *
	 * @param {string} [options.name] The name of the organization used in URLs
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<OrganizationResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	createOrUpdateWithHttpOperationResponse(options) {
		let client = this.client;
		let self = this;
		return new Promise((resolve, reject) => {
			self._createOrUpdate(options, (err, result, request, response) => {
				let httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Creates a new organization and returns it to the caller
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The display name of the organization
	 *
	 * @param {string} [options.name] The name of the organization used in URLs
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
	 *                      @resolve {OrganizationResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link OrganizationResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	createOrUpdate(options, optionalCallback) {
		let client = this.client;
		let self = this;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (!optionalCallback) {
			return new Promise((resolve, reject) => {
				self._createOrUpdate(
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
		} else {
			return self._createOrUpdate(options, optionalCallback);
		}
	}

	/**
	 * Returns a list of organizations the requesting user has access to
	 *
	 * @param {object} [options] Optional Parameters.
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
	listWithHttpOperationResponse(options) {
		let client = this.client;
		let self = this;
		return new Promise((resolve, reject) => {
			self._list(options, (err, result, request, response) => {
				let httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Returns a list of organizations the requesting user has access to
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
	list(options, optionalCallback) {
		let client = this.client;
		let self = this;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (!optionalCallback) {
			return new Promise((resolve, reject) => {
				self._list(options, (err, result, request, response) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
					return;
				});
			});
		} else {
			return self._list(options, optionalCallback);
		}
	}
}

module.exports = Organizations;
