import { _ as _sfc_main$1 } from './index-4MyzTv5r.mjs';
import { h as __nuxt_component_1$1, f as useFetch, g as useAsyncData, d as useNuxtApp, e as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, shallowRef, watch, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'class-variance-authority';
import 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'undio';
import 'jose';
import 'consola';
import 'vue-router';
import 'node:url';
import 'pinia';
import 'perfect-debounce';
import '@vue/shared';
import 'pinia-plugin-unstorage';
import '@lucide/vue';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const jsonBodySerializer = {
  bodySerializer: (body) => JSON.stringify(body, (_key, value) => typeof value === "bigint" ? value.toString() : value)
};
const createSseClient = ({
  onRequest,
  onSseError,
  onSseEvent,
  responseTransformer,
  responseValidator,
  sseDefaultRetryDelay,
  sseMaxRetryAttempts,
  sseMaxRetryDelay,
  sseSleepFn,
  url,
  ...options
}) => {
  let lastEventId;
  const sleep = sseSleepFn ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const createStream = async function* () {
    let retryDelay = sseDefaultRetryDelay ?? 3e3;
    let attempt = 0;
    const signal = options.signal ?? new AbortController().signal;
    while (true) {
      if (signal.aborted) break;
      attempt++;
      const headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      if (lastEventId !== void 0) {
        headers.set("Last-Event-ID", lastEventId);
      }
      try {
        const requestInit = {
          redirect: "follow",
          ...options,
          body: options.serializedBody,
          headers,
          signal
        };
        let request = new Request(url, requestInit);
        if (onRequest) {
          request = await onRequest(url, requestInit);
        }
        const _fetch = options.fetch ?? globalThis.fetch;
        const response = await _fetch(request);
        if (!response.ok) throw new Error(`SSE failed: ${response.status} ${response.statusText}`);
        if (!response.body) throw new Error("No body in SSE response");
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = "";
        const abortHandler = () => {
          try {
            reader.cancel();
          } catch {
          }
        };
        signal.addEventListener("abort", abortHandler);
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            buffer = buffer.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            const chunks = buffer.split("\n\n");
            buffer = chunks.pop() ?? "";
            for (const chunk of chunks) {
              const lines = chunk.split("\n");
              const dataLines = [];
              let eventName;
              for (const line of lines) {
                if (line.startsWith("data:")) {
                  dataLines.push(line.replace(/^data:\s*/, ""));
                } else if (line.startsWith("event:")) {
                  eventName = line.replace(/^event:\s*/, "");
                } else if (line.startsWith("id:")) {
                  lastEventId = line.replace(/^id:\s*/, "");
                } else if (line.startsWith("retry:")) {
                  const parsed = Number.parseInt(line.replace(/^retry:\s*/, ""), 10);
                  if (!Number.isNaN(parsed)) {
                    retryDelay = parsed;
                  }
                }
              }
              let data;
              let parsedJson = false;
              if (dataLines.length) {
                const rawData = dataLines.join("\n");
                try {
                  data = JSON.parse(rawData);
                  parsedJson = true;
                } catch {
                  data = rawData;
                }
              }
              if (parsedJson) {
                if (responseValidator) {
                  await responseValidator(data);
                }
                if (responseTransformer) {
                  data = await responseTransformer(data);
                }
              }
              onSseEvent?.({
                data,
                event: eventName,
                id: lastEventId,
                retry: retryDelay
              });
              if (dataLines.length) {
                yield data;
              }
            }
          }
        } finally {
          signal.removeEventListener("abort", abortHandler);
          reader.releaseLock();
        }
        break;
      } catch (error) {
        onSseError?.(error);
        if (sseMaxRetryAttempts !== void 0 && attempt >= sseMaxRetryAttempts) {
          break;
        }
        const backoff = Math.min(retryDelay * 2 ** (attempt - 1), sseMaxRetryDelay ?? 3e4);
        await sleep(backoff);
      }
    }
  };
  const stream = createStream();
  return { stream };
};
const separatorArrayExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
const separatorArrayNoExplode = (style) => {
  switch (style) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
};
const separatorObjectExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
const serializeArrayParam = ({
  allowReserved,
  explode,
  name,
  style,
  value
}) => {
  if (!explode) {
    const joinedValues2 = (allowReserved ? value : value.map((v) => encodeURIComponent(v))).join(separatorArrayNoExplode(style));
    switch (style) {
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      case "simple":
        return joinedValues2;
      default:
        return `${name}=${joinedValues2}`;
    }
  }
  const separator = separatorArrayExplode(style);
  const joinedValues = value.map((v) => {
    if (style === "label" || style === "simple") {
      return allowReserved ? v : encodeURIComponent(v);
    }
    return serializePrimitiveParam({
      allowReserved,
      name,
      value: v
    });
  }).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
const serializePrimitiveParam = ({
  allowReserved,
  name,
  value
}) => {
  if (value === void 0 || value === null) {
    return "";
  }
  if (typeof value === "object") {
    throw new Error(
      "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these."
    );
  }
  return `${name}=${allowReserved ? value : encodeURIComponent(value)}`;
};
const serializeObjectParam = ({
  allowReserved,
  explode,
  name,
  style,
  value,
  valueOnly
}) => {
  if (value instanceof Date) {
    return valueOnly ? value.toISOString() : `${name}=${value.toISOString()}`;
  }
  if (style !== "deepObject" && !explode) {
    let values = [];
    Object.entries(value).forEach(([key, v]) => {
      values = [...values, key, allowReserved ? v : encodeURIComponent(v)];
    });
    const joinedValues2 = values.join(",");
    switch (style) {
      case "form":
        return `${name}=${joinedValues2}`;
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      default:
        return joinedValues2;
    }
  }
  const separator = separatorObjectExplode(style);
  const joinedValues = Object.entries(value).map(
    ([key, v]) => serializePrimitiveParam({
      allowReserved,
      name: style === "deepObject" ? `${name}[${key}]` : key,
      value: v
    })
  ).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
const PATH_PARAM_RE = /\{[^{}]+\}/g;
const defaultPathSerializer = ({ path, url: _url }) => {
  let url = _url;
  const matches = _url.match(PATH_PARAM_RE);
  if (matches) {
    for (const match of matches) {
      let explode = false;
      let name = match.substring(1, match.length - 1);
      let style = "simple";
      if (name.endsWith("*")) {
        explode = true;
        name = name.substring(0, name.length - 1);
      }
      if (name.startsWith(".")) {
        name = name.substring(1);
        style = "label";
      } else if (name.startsWith(";")) {
        name = name.substring(1);
        style = "matrix";
      }
      const value = path[name];
      if (value === void 0 || value === null) {
        continue;
      }
      if (Array.isArray(value)) {
        url = url.replace(match, serializeArrayParam({ explode, name, style, value }));
        continue;
      }
      if (typeof value === "object") {
        url = url.replace(
          match,
          serializeObjectParam({
            explode,
            name,
            style,
            value,
            valueOnly: true
          })
        );
        continue;
      }
      if (style === "matrix") {
        url = url.replace(
          match,
          `;${serializePrimitiveParam({
            name,
            value
          })}`
        );
        continue;
      }
      const replaceValue = encodeURIComponent(
        style === "label" ? `.${value}` : value
      );
      url = url.replace(match, replaceValue);
    }
  }
  return url;
};
const getUrl = ({
  baseUrl,
  path,
  query,
  querySerializer,
  url: _url
}) => {
  const pathUrl = _url.startsWith("/") ? _url : `/${_url}`;
  let url = (baseUrl ?? "") + pathUrl;
  if (path) {
    url = defaultPathSerializer({ path, url });
  }
  let search = query ? querySerializer(query) : "";
  if (search.startsWith("?")) {
    search = search.substring(1);
  }
  if (search) {
    url += `?${search}`;
  }
  return url;
};
function getValidRequestBody(options) {
  const hasBody = options.body !== void 0;
  const isSerializedBody = hasBody && options.bodySerializer;
  if (isSerializedBody) {
    if ("serializedBody" in options) {
      const hasSerializedBody = options.serializedBody !== void 0 && options.serializedBody !== "";
      return hasSerializedBody ? options.serializedBody : null;
    }
    return options.body !== "" ? options.body : null;
  }
  if (hasBody) {
    return options.body;
  }
  return void 0;
}
const getAuthToken = async (auth, callback) => {
  const token = typeof callback === "function" ? await callback(auth) : callback;
  if (!token) {
    return;
  }
  if (auth.scheme === "bearer") {
    return `Bearer ${token}`;
  }
  if (auth.scheme === "basic") {
    return `Basic ${btoa(token)}`;
  }
  return token;
};
const createQuerySerializer = ({
  parameters = {},
  ...args
} = {}) => {
  const querySerializer = (queryParams) => {
    const search = [];
    if (queryParams && typeof queryParams === "object") {
      for (const name in queryParams) {
        const value = queryParams[name];
        if (value === void 0 || value === null) {
          continue;
        }
        const options = parameters[name] || args;
        if (Array.isArray(value)) {
          const serializedArray = serializeArrayParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "form",
            value,
            ...options.array
          });
          if (serializedArray) search.push(serializedArray);
        } else if (typeof value === "object") {
          const serializedObject = serializeObjectParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "deepObject",
            value,
            ...options.object
          });
          if (serializedObject) search.push(serializedObject);
        } else {
          const serializedPrimitive = serializePrimitiveParam({
            allowReserved: options.allowReserved,
            name,
            value
          });
          if (serializedPrimitive) search.push(serializedPrimitive);
        }
      }
    }
    return search.join("&");
  };
  return querySerializer;
};
const getParseAs = (contentType) => {
  if (!contentType) {
    return "stream";
  }
  const cleanContent = contentType.split(";")[0]?.trim();
  if (!cleanContent) {
    return;
  }
  if (cleanContent.startsWith("application/json") || cleanContent.endsWith("+json")) {
    return "json";
  }
  if (cleanContent === "multipart/form-data") {
    return "formData";
  }
  if (["application/", "audio/", "image/", "video/"].some((type) => cleanContent.startsWith(type))) {
    return "blob";
  }
  if (cleanContent.startsWith("text/")) {
    return "text";
  }
  return;
};
const checkForExistence = (options, name) => {
  if (!name) {
    return false;
  }
  if (options.headers.has(name) || options.query?.[name] || options.headers.get("Cookie")?.includes(`${name}=`)) {
    return true;
  }
  return false;
};
const setAuthParams = async ({
  security,
  ...options
}) => {
  for (const auth of security) {
    if (checkForExistence(options, auth.name)) {
      continue;
    }
    const token = await getAuthToken(auth, options.auth);
    if (!token) {
      continue;
    }
    const name = auth.name ?? "Authorization";
    switch (auth.in) {
      case "query":
        if (!options.query) {
          options.query = {};
        }
        options.query[name] = token;
        break;
      case "cookie":
        options.headers.append("Cookie", `${name}=${token}`);
        break;
      case "header":
      default:
        options.headers.set(name, token);
        break;
    }
  }
};
const buildUrl = (options) => getUrl({
  baseUrl: options.baseUrl,
  path: options.path,
  query: options.query,
  querySerializer: typeof options.querySerializer === "function" ? options.querySerializer : createQuerySerializer(options.querySerializer),
  url: options.url
});
const mergeConfigs = (a, b) => {
  const config = { ...a, ...b };
  if (config.baseUrl?.endsWith("/")) {
    config.baseUrl = config.baseUrl.substring(0, config.baseUrl.length - 1);
  }
  config.headers = mergeHeaders(a.headers, b.headers);
  return config;
};
const headersEntries = (headers) => {
  const entries = [];
  headers.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
};
const mergeHeaders = (...headers) => {
  const mergedHeaders = new Headers();
  for (const header of headers) {
    if (!header) {
      continue;
    }
    const iterator = header instanceof Headers ? headersEntries(header) : Object.entries(header);
    for (const [key, value] of iterator) {
      if (value === null) {
        mergedHeaders.delete(key);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          mergedHeaders.append(key, v);
        }
      } else if (value !== void 0) {
        mergedHeaders.set(
          key,
          typeof value === "object" ? JSON.stringify(value) : value
        );
      }
    }
  }
  return mergedHeaders;
};
class Interceptors {
  fns = [];
  clear() {
    this.fns = [];
  }
  eject(id) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = null;
    }
  }
  exists(id) {
    const index = this.getInterceptorIndex(id);
    return Boolean(this.fns[index]);
  }
  getInterceptorIndex(id) {
    if (typeof id === "number") {
      return this.fns[id] ? id : -1;
    }
    return this.fns.indexOf(id);
  }
  update(id, fn) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = fn;
      return id;
    }
    return false;
  }
  use(fn) {
    this.fns.push(fn);
    return this.fns.length - 1;
  }
}
const createInterceptors = () => ({
  error: new Interceptors(),
  request: new Interceptors(),
  response: new Interceptors()
});
const defaultQuerySerializer = createQuerySerializer({
  allowReserved: false,
  array: {
    explode: true,
    style: "form"
  },
  object: {
    explode: true,
    style: "deepObject"
  }
});
const defaultHeaders = {
  "Content-Type": "application/json"
};
const createConfig = (override = {}) => ({
  ...jsonBodySerializer,
  headers: defaultHeaders,
  parseAs: "auto",
  querySerializer: defaultQuerySerializer,
  ...override
});
const createClient = (config = {}) => {
  let _config = mergeConfigs(createConfig(), config);
  const getConfig = () => ({ ..._config });
  const setConfig = (config2) => {
    _config = mergeConfigs(_config, config2);
    return getConfig();
  };
  const interceptors = createInterceptors();
  const beforeRequest = async (options) => {
    const opts = {
      ..._config,
      ...options,
      fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
      headers: mergeHeaders(_config.headers, options.headers),
      serializedBody: void 0
    };
    if (opts.security) {
      await setAuthParams({
        ...opts,
        security: opts.security
      });
    }
    if (opts.requestValidator) {
      await opts.requestValidator(opts);
    }
    if (opts.body !== void 0 && opts.bodySerializer) {
      opts.serializedBody = opts.bodySerializer(opts.body);
    }
    if (opts.body === void 0 || opts.serializedBody === "") {
      opts.headers.delete("Content-Type");
    }
    const url = buildUrl(opts);
    return { opts, url };
  };
  const request = async (options) => {
    const { opts, url } = await beforeRequest(options);
    const requestInit = {
      redirect: "follow",
      ...opts,
      body: getValidRequestBody(opts)
    };
    let request2 = new Request(url, requestInit);
    for (const fn of interceptors.request.fns) {
      if (fn) {
        request2 = await fn(request2, opts);
      }
    }
    const _fetch = opts.fetch;
    let response;
    try {
      response = await _fetch(request2);
    } catch (error2) {
      let finalError2 = error2;
      for (const fn of interceptors.error.fns) {
        if (fn) {
          finalError2 = await fn(error2, void 0, request2, opts);
        }
      }
      finalError2 = finalError2 || {};
      if (opts.throwOnError) {
        throw finalError2;
      }
      return opts.responseStyle === "data" ? void 0 : {
        error: finalError2,
        request: request2,
        response: void 0
      };
    }
    for (const fn of interceptors.response.fns) {
      if (fn) {
        response = await fn(response, request2, opts);
      }
    }
    const result = {
      request: request2,
      response
    };
    if (response.ok) {
      const parseAs = (opts.parseAs === "auto" ? getParseAs(response.headers.get("Content-Type")) : opts.parseAs) ?? "json";
      if (response.status === 204 || response.headers.get("Content-Length") === "0") {
        let emptyData;
        switch (parseAs) {
          case "arrayBuffer":
          case "blob":
          case "text":
            emptyData = await response[parseAs]();
            break;
          case "formData":
            emptyData = new FormData();
            break;
          case "stream":
            emptyData = response.body;
            break;
          case "json":
          default:
            emptyData = {};
            break;
        }
        return opts.responseStyle === "data" ? emptyData : {
          data: emptyData,
          ...result
        };
      }
      let data;
      switch (parseAs) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "text":
          data = await response[parseAs]();
          break;
        case "json": {
          const text = await response.text();
          data = text ? JSON.parse(text) : {};
          break;
        }
        case "stream":
          return opts.responseStyle === "data" ? response.body : {
            data: response.body,
            ...result
          };
      }
      if (parseAs === "json") {
        if (opts.responseValidator) {
          await opts.responseValidator(data);
        }
        if (opts.responseTransformer) {
          data = await opts.responseTransformer(data);
        }
      }
      return opts.responseStyle === "data" ? data : {
        data,
        ...result
      };
    }
    const textError = await response.text();
    let jsonError;
    try {
      jsonError = JSON.parse(textError);
    } catch {
    }
    const error = jsonError ?? textError;
    let finalError = error;
    for (const fn of interceptors.error.fns) {
      if (fn) {
        finalError = await fn(error, response, request2, opts);
      }
    }
    finalError = finalError || {};
    if (opts.throwOnError) {
      throw finalError;
    }
    return opts.responseStyle === "data" ? void 0 : {
      error: finalError,
      ...result
    };
  };
  const makeMethodFn = (method) => (options) => request({ ...options, method });
  const makeSseFn = (method) => async (options) => {
    const { opts, url } = await beforeRequest(options);
    return createSseClient({
      ...opts,
      body: opts.body,
      headers: opts.headers,
      method,
      onRequest: async (url2, init) => {
        let request2 = new Request(url2, init);
        for (const fn of interceptors.request.fns) {
          if (fn) {
            request2 = await fn(request2, opts);
          }
        }
        return request2;
      },
      serializedBody: getValidRequestBody(opts),
      url
    });
  };
  const _buildUrl = (options) => buildUrl({ ..._config, ...options });
  return {
    buildUrl: _buildUrl,
    connect: makeMethodFn("CONNECT"),
    delete: makeMethodFn("DELETE"),
    get: makeMethodFn("GET"),
    getConfig,
    head: makeMethodFn("HEAD"),
    interceptors,
    options: makeMethodFn("OPTIONS"),
    patch: makeMethodFn("PATCH"),
    post: makeMethodFn("POST"),
    put: makeMethodFn("PUT"),
    request,
    setConfig,
    sse: {
      connect: makeSseFn("CONNECT"),
      delete: makeSseFn("DELETE"),
      get: makeSseFn("GET"),
      head: makeSseFn("HEAD"),
      options: makeSseFn("OPTIONS"),
      patch: makeSseFn("PATCH"),
      post: makeSseFn("POST"),
      put: makeSseFn("PUT"),
      trace: makeSseFn("TRACE")
    },
    trace: makeMethodFn("TRACE")
  };
};
const client = createClient(createConfig({ baseUrl: "https://jsonplaceholder.typicode.com/" }));
const createPost = (options) => (options.client ?? client).post({
  url: "/posts",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
function applyRequestModifications(options, modifications) {
  if (modifications.body !== void 0) {
    options.body = modifications.body;
  }
  if (modifications.headers !== void 0) {
    options.headers = {
      ...options.headers,
      ...modifications.headers
    };
  }
  if (modifications.query !== void 0) {
    options.query = {
      ...options.query,
      ...modifications.query
    };
  }
}
function applyPick(data, paths) {
  const result = {};
  for (const path of paths) {
    const keys = path.split(".");
    let value = data;
    let exists = true;
    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        exists = false;
        break;
      }
    }
    if (exists) {
      let current = result;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current)) {
          current[key] = {};
        }
        current = current[key];
      }
      current[keys[keys.length - 1]] = value;
    }
  }
  return result;
}
function getGlobalHeaders() {
  let headers = {};
  try {
    if (typeof useApiHeaders !== "undefined") {
      const getHeaders = useApiHeaders();
      if (getHeaders) {
        const h = typeof getHeaders === "function" ? getHeaders() : getHeaders;
        if (h && typeof h === "object") {
          headers = { ...headers, ...h };
        }
      }
    }
  } catch (e) {
  }
  try {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.$getApiHeaders) {
      const h = nuxtApp.$getApiHeaders();
      if (h && typeof h === "object") {
        headers = { ...headers, ...h };
      }
    }
  } catch (e) {
  }
  return headers;
}
function getGlobalCallbacks() {
  try {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.$getGlobalApiCallbacks) {
      const config = nuxtApp.$getGlobalApiCallbacks();
      if (config && typeof config === "object") {
        return Array.isArray(config) ? config : [config];
      }
    }
  } catch (e) {
  }
  return [];
}
function getGlobalBaseUrl() {
  try {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig?.public?.apiBaseUrl;
    return url || void 0;
  } catch {
    return void 0;
  }
}
function shouldApplyGlobalCallback(url, method, callbackName, rule, skipConfig) {
  if (skipConfig === true) return false;
  if (Array.isArray(skipConfig) && skipConfig.includes(callbackName)) return false;
  if (rule.patterns && rule.patterns.length > 0) {
    const matchesUrl = rule.patterns.some((pattern) => {
      const regexPattern = pattern.replace(/\*\*/g, "@@DOUBLE_STAR@@").replace(/\*/g, "[^/]*").replace(/@@DOUBLE_STAR@@/g, ".*");
      return new RegExp("^" + regexPattern + "$").test(url);
    });
    if (!matchesUrl) return false;
  }
  if (rule.methods && rule.methods.length > 0) {
    if (!rule.methods.map((m) => m.toUpperCase()).includes(method.toUpperCase())) return false;
  }
  return true;
}
function mergeCallbacks(url, method, localCallbacks, skipConfig) {
  const rules = getGlobalCallbacks();
  async function runGlobalRules(callbackName, ...args) {
    let continueLocal = true;
    for (const rule of rules) {
      const cb = rule[callbackName];
      if (!cb || !shouldApplyGlobalCallback(url, method, callbackName, rule, skipConfig)) continue;
      try {
        const result = await cb(...args);
        if (result === false) continueLocal = false;
      } catch (error) {
        console.error(`Error in global ${callbackName} callback:`, error);
      }
    }
    return continueLocal;
  }
  return {
    /**
     * Merged onRequest: runs all applicable global rules collecting and deep-merging
     * modifications (headers and query are merged; body is last-write-wins).
     * Local onRequest runs after all rules unless any returns false, and its
     * modifications take highest priority.
     */
    onRequest: async (ctx) => {
      let mergedMods;
      let continueLocal = true;
      for (const rule of rules) {
        if (!rule.onRequest || !shouldApplyGlobalCallback(url, method, "onRequest", rule, skipConfig)) continue;
        try {
          const result = await rule.onRequest(ctx);
          if (result === false) {
            continueLocal = false;
          } else if (result && typeof result === "object") {
            const mod = result;
            mergedMods = {
              ...mergedMods ?? {},
              ...mod,
              headers: { ...mergedMods?.headers ?? {}, ...mod.headers ?? {} },
              query: { ...mergedMods?.query ?? {}, ...mod.query ?? {} }
            };
          }
        } catch (error) {
          console.error("Error in global onRequest callback:", error);
        }
      }
      if (continueLocal && localCallbacks.onRequest) {
        const localResult = await localCallbacks.onRequest(ctx);
        if (localResult && typeof localResult === "object") {
          const localMod = localResult;
          return mergedMods ? {
            ...mergedMods,
            ...localMod,
            headers: { ...mergedMods.headers ?? {}, ...localMod.headers ?? {} },
            query: { ...mergedMods.query ?? {}, ...localMod.query ?? {} }
          } : localMod;
        }
      }
      return mergedMods;
    },
    /** Merged onSuccess: global rules first in order, then local (unless suppressed). */
    onSuccess: async (data, context) => {
      const continueLocal = await runGlobalRules("onSuccess", data, context);
      if (continueLocal && localCallbacks.onSuccess) {
        await localCallbacks.onSuccess(data, context);
      }
    },
    /** Merged onError: global rules first in order, then local (unless suppressed). */
    onError: async (error, context) => {
      const continueLocal = await runGlobalRules("onError", error, context);
      if (continueLocal && localCallbacks.onError) {
        await localCallbacks.onError(error, context);
      }
    },
    /** Merged onFinish: global rules first in order, then local (unless suppressed). */
    onFinish: async (context) => {
      const continueLocal = await runGlobalRules("onFinish", context);
      if (continueLocal && localCallbacks.onFinish) {
        await localCallbacks.onFinish(context);
      }
    }
  };
}
const DEFAULT_PAGINATION_CONFIG = {
  meta: {
    metaSource: "body",
    fields: {
      total: "total",
      totalPages: "totalPages",
      currentPage: "currentPage",
      perPage: "perPage"
    }
  },
  request: {
    sendAs: "query",
    params: { page: "page", perPage: "perPage" },
    defaults: { page: 1, perPage: 20 }
  }
};
function getGlobalApiPagination() {
  try {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.$getGlobalApiPagination) {
      const config = nuxtApp.$getGlobalApiPagination();
      if (config && typeof config === "object") return config;
    }
  } catch {
  }
  return DEFAULT_PAGINATION_CONFIG;
}
function buildPaginationRequest(page, perPage, config) {
  const { sendAs, params } = config.request;
  const payload = {
    [params.page]: page,
    [params.perPage]: perPage
  };
  if (sendAs === "query") return { query: payload };
  if (sendAs === "body") return { body: payload };
  if (sendAs === "headers") {
    return {
      headers: {
        [params.page]: String(page),
        [params.perPage]: String(perPage)
      }
    };
  }
  return { query: payload };
}
function resolveDotPath(obj, path) {
  if (!obj || typeof obj !== "object") return void 0;
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return void 0;
    current = current[key];
  }
  return current;
}
function extractPaginationMetaFromBody(responseData, config) {
  const { fields } = config.meta;
  const result = {};
  const rawTotal = resolveDotPath(responseData, fields.total);
  if (rawTotal !== void 0) result.total = Number(rawTotal);
  const rawTotalPages = resolveDotPath(responseData, fields.totalPages);
  if (rawTotalPages !== void 0) result.totalPages = Number(rawTotalPages);
  const rawCurrentPage = resolveDotPath(responseData, fields.currentPage);
  if (rawCurrentPage !== void 0) result.currentPage = Number(rawCurrentPage);
  const rawPerPage = resolveDotPath(responseData, fields.perPage);
  if (rawPerPage !== void 0) result.perPage = Number(rawPerPage);
  return result;
}
function extractPaginationMetaFromHeaders(headers, config) {
  const { fields } = config.meta;
  const result = {};
  const rawTotal = headers.get(fields.total);
  if (rawTotal !== null) result.total = Number(rawTotal);
  const rawTotalPages = headers.get(fields.totalPages);
  if (rawTotalPages !== null) result.totalPages = Number(rawTotalPages);
  const rawCurrentPage = headers.get(fields.currentPage);
  if (rawCurrentPage !== null) result.currentPage = Number(rawCurrentPage);
  const rawPerPage = headers.get(fields.perPage);
  if (rawPerPage !== null) result.perPage = Number(rawPerPage);
  return result;
}
function unwrapDataKey(responseData, config) {
  const key = config.meta.fields.dataKey;
  if (key && responseData && typeof responseData === "object" && key in responseData) {
    return responseData[key];
  }
  return responseData;
}
function useApiRequest(url, options) {
  const {
    onRequest,
    onSuccess,
    onError,
    onFinish,
    skipGlobalCallbacks,
    transform,
    pick,
    paginated,
    initialPage,
    initialPerPage,
    paginationConfig,
    ...fetchOptions
  } = options || {};
  const urlValue = url;
  const activePaginationConfig = paginationConfig ?? (paginated ? getGlobalApiPagination() : null);
  const page = ref(initialPage ?? activePaginationConfig?.request.defaults.page ?? 1);
  const perPage = ref(initialPerPage ?? activePaginationConfig?.request.defaults.perPage ?? 20);
  const paginationState = ref({
    currentPage: page.value,
    totalPages: 0,
    total: 0,
    perPage: perPage.value
  });
  const mergedCallbacks = mergeCallbacks(
    urlValue,
    String(fetchOptions.method || "GET"),
    { onRequest, onSuccess, onError, onFinish },
    skipGlobalCallbacks
  );
  const modifiedOptions = { ...fetchOptions };
  const globalHeaders = getGlobalHeaders();
  if (Object.keys(globalHeaders).length > 0) {
    modifiedOptions.headers = {
      ...globalHeaders,
      ...modifiedOptions.headers
      // User headers override global headers
    };
  }
  if (!modifiedOptions.baseURL) {
    modifiedOptions.baseURL = getGlobalBaseUrl();
  }
  if (!modifiedOptions.baseURL) {
    console.warn(
      "[nuxt-openapi-hyperfetch] No baseURL configured. Set runtimeConfig.public.apiBaseUrl in nuxt.config.ts or pass baseURL in options."
    );
  }
  if (paginated && activePaginationConfig) {
    const existingOnRequestForPagination = modifiedOptions.onRequest;
    modifiedOptions.onRequest = async (ctx) => {
      const paginationPayload = buildPaginationRequest(page.value, perPage.value, activePaginationConfig);
      if (paginationPayload.query) {
        ctx.options.query = { ...ctx.options.query, ...paginationPayload.query };
      }
      if (paginationPayload.body) {
        ctx.options.body = {
          ...ctx.options.body && typeof ctx.options.body === "object" ? ctx.options.body : {},
          ...paginationPayload.body
        };
      }
      if (paginationPayload.headers) {
        ctx.options.headers = { ...ctx.options.headers, ...paginationPayload.headers };
      }
      if (existingOnRequestForPagination) {
        await existingOnRequestForPagination(ctx);
      }
    };
  }
  if (paginated && activePaginationConfig && activePaginationConfig.meta.metaSource === "headers") {
    const existingOnResponse = modifiedOptions.onResponse;
    modifiedOptions.onResponse = async ({ response }) => {
      const meta = extractPaginationMetaFromHeaders(response.headers, activePaginationConfig);
      if (meta.total !== void 0) paginationState.value.total = meta.total;
      if (meta.totalPages !== void 0) paginationState.value.totalPages = meta.totalPages;
      if (meta.currentPage !== void 0) paginationState.value.currentPage = meta.currentPage;
      if (meta.perPage !== void 0) paginationState.value.perPage = meta.perPage;
      if (existingOnResponse) {
        await existingOnResponse({ response });
      }
    };
  }
  if (paginated) {
    modifiedOptions.watch = [...modifiedOptions.watch ?? [], page, perPage];
  }
  if (mergedCallbacks.onRequest) {
    const existingOnRequest = modifiedOptions.onRequest;
    modifiedOptions.onRequest = async ({ options: fetchOpts }) => {
      const requestContext = {
        url: urlValue,
        method: String(fetchOpts.method || modifiedOptions.method || "GET"),
        body: fetchOpts.body,
        headers: fetchOpts.headers,
        query: fetchOpts.query
      };
      try {
        const modifications = await mergedCallbacks.onRequest(requestContext);
        if (modifications && typeof modifications === "object") {
          applyRequestModifications(fetchOpts, modifications);
        }
      } catch (error) {
        console.error("Error in merged onRequest callback:", error);
      }
      if (existingOnRequest) {
        await existingOnRequest({ options: fetchOpts });
      }
    };
  }
  const result = useFetch(
    url,
    modifiedOptions,
    "$_LTbg-8KPL"
    /* nuxt-injected */
  );
  const transformedData = ref(null);
  let successExecuted = false;
  let errorExecuted = false;
  watch(
    () => [result.data.value, result.error.value, result.pending.value],
    async ([data, error, pending], prev) => {
      const [prevData, prevError, prevPending] = prev ?? [void 0, void 0, void 0];
      if (data && data !== prevData) {
        let processedData = paginated && activePaginationConfig && activePaginationConfig.meta.metaSource === "body" ? unwrapDataKey(data, activePaginationConfig) : data;
        if (paginated && activePaginationConfig && activePaginationConfig.meta.metaSource === "body") {
          const meta = extractPaginationMetaFromBody(data, activePaginationConfig);
          if (meta.total !== void 0) paginationState.value.total = meta.total;
          if (meta.totalPages !== void 0) paginationState.value.totalPages = meta.totalPages;
          if (meta.currentPage !== void 0) paginationState.value.currentPage = meta.currentPage;
          if (meta.perPage !== void 0) paginationState.value.perPage = meta.perPage;
        }
        if (pick) {
          processedData = applyPick(processedData, pick);
        }
        if (transform) {
          try {
            processedData = transform(processedData);
          } catch (err) {
            console.error("Error in transform function:", err);
          }
        }
        transformedData.value = processedData;
        if (data != null && !error && !successExecuted && mergedCallbacks.onSuccess) {
          successExecuted = true;
          try {
            await mergedCallbacks.onSuccess(processedData);
          } catch (err) {
            console.error("Error in merged onSuccess callback:", err);
          }
        }
      }
      if (error && error !== prevError && !errorExecuted && mergedCallbacks.onError) {
        errorExecuted = true;
        try {
          await mergedCallbacks.onError(error);
        } catch (err) {
          console.error("Error in merged onError callback:", err);
        }
      }
      if (prevPending && !pending && mergedCallbacks.onFinish) {
        const finishContext = {
          data: transformedData.value ?? void 0,
          error: error ?? void 0,
          success: data != null && !error
        };
        try {
          await mergedCallbacks.onFinish(finishContext);
        } catch (err) {
          console.error("Error in merged onFinish callback:", err);
        }
      }
    },
    { immediate: true }
  );
  const baseResult = Object.assign(result, {
    data: transformedData
  });
  if (!paginated) return baseResult;
  const hasNextPage = computed(() => paginationState.value.currentPage < paginationState.value.totalPages);
  const hasPrevPage = computed(() => paginationState.value.currentPage > 1);
  const goToPage = (n) => {
    page.value = n;
    successExecuted = false;
    errorExecuted = false;
  };
  const nextPage = () => {
    if (hasNextPage.value) goToPage(page.value + 1);
  };
  const prevPage = () => {
    if (hasPrevPage.value) goToPage(page.value - 1);
  };
  const setPerPage = (n) => {
    perPage.value = n;
    page.value = 1;
    successExecuted = false;
    errorExecuted = false;
  };
  return Object.assign(baseResult, {
    pagination: computed(() => ({
      ...paginationState.value,
      hasNextPage: hasNextPage.value,
      hasPrevPage: hasPrevPage.value
    })),
    goToPage,
    nextPage,
    prevPage,
    setPerPage
  });
}
function useFetchListPosts(params, options) {
  const p = isRef(params) ? params : shallowRef(params);
  return useApiRequest("/posts", {
    method: "GET",
    baseURL: "https://jsonplaceholder.typicode.com",
    query: computed(() => p.value.query),
    ...options
  });
}
function useApiAsyncData(key, url, options) {
  const {
    method = "GET",
    body,
    headers = {},
    params,
    baseURL,
    cacheKey,
    transform,
    pick,
    onRequest,
    onSuccess,
    onError,
    onFinish,
    skipGlobalCallbacks,
    immediate = true,
    lazy = false,
    server = true,
    dedupe = "cancel",
    watch: watchOption = void 0,
    paginated,
    initialPage,
    initialPerPage,
    paginationConfig,
    ...restOptions
  } = options || {};
  const activePaginationConfig = paginationConfig ?? (paginated ? getGlobalApiPagination() : null);
  const page = ref(initialPage ?? activePaginationConfig?.request.defaults.page ?? 1);
  const perPage = ref(initialPerPage ?? activePaginationConfig?.request.defaults.perPage ?? 20);
  const paginationState = ref({
    currentPage: page.value,
    totalPages: 0,
    total: 0,
    perPage: perPage.value
  });
  const resolvedBaseURL = baseURL || getGlobalBaseUrl();
  if (!resolvedBaseURL) {
    console.warn(
      "[nuxt-openapi-hyperfetch] No baseURL configured. Set runtimeConfig.public.apiBaseUrl in nuxt.config.ts or pass baseURL in options."
    );
  }
  const isMutation = ["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase());
  const effectiveWatchOption = watchOption !== void 0 ? watchOption : !isMutation;
  const watchSources = effectiveWatchOption === false ? [] : [
    ...typeof url === "function" ? [url] : [],
    ...body ? isRef(body) ? [body] : typeof body === "object" ? [() => body] : [] : [],
    ...params ? isRef(params) ? [params] : typeof params === "object" ? [() => params] : [] : [],
    // Add pagination refs so page/perPage changes trigger re-fetch
    ...paginated ? [page, perPage] : []
  ];
  const computedKey = () => {
    if (cacheKey) return cacheKey;
    const resolvedUrl = typeof url === "function" ? url() : url;
    const resolvedParams = toValue(params);
    const paramsSuffix = resolvedParams && typeof resolvedParams === "object" && Object.keys(resolvedParams).length > 0 ? "-" + JSON.stringify(resolvedParams) : "";
    return `${key}-${resolvedUrl}${paramsSuffix}`;
  };
  const fetchFn = async () => {
    const finalUrl = typeof url === "function" ? url() : url;
    const mergedCallbacks = mergeCallbacks(
      finalUrl,
      method,
      { onRequest, onSuccess, onError, onFinish },
      skipGlobalCallbacks
    );
    try {
      const globalHeaders = getGlobalHeaders();
      const requestContext = {
        url: finalUrl,
        method,
        headers: { ...globalHeaders, ...headers },
        body,
        params
      };
      const modifiedContext = { ...requestContext };
      if (mergedCallbacks.onRequest) {
        const result2 = await mergedCallbacks.onRequest(requestContext);
        if (result2 && typeof result2 === "object") {
          const modifications = result2;
          if (modifications.body !== void 0) {
            modifiedContext.body = modifications.body;
          }
          if (modifications.headers !== void 0) {
            modifiedContext.headers = {
              ...modifiedContext.headers,
              ...modifications.headers
            };
          }
          if (modifications.query !== void 0) {
            modifiedContext.params = {
              ...modifiedContext.params,
              ...modifications.query
            };
          }
        }
      }
      let data;
      if (paginated && activePaginationConfig) {
        const paginationPayload = buildPaginationRequest(page.value, perPage.value, activePaginationConfig);
        const paginatedQuery = { ...toValue(modifiedContext.params), ...paginationPayload.query };
        const paginatedBody = paginationPayload.body ? { ...toValue(modifiedContext.body) ?? {}, ...paginationPayload.body } : toValue(modifiedContext.body);
        const paginatedHeaders = paginationPayload.headers ? { ...modifiedContext.headers, ...paginationPayload.headers } : modifiedContext.headers;
        if (activePaginationConfig.meta.metaSource === "headers") {
          const response = await $fetch.raw(modifiedContext.url, {
            method: modifiedContext.method,
            headers: paginatedHeaders,
            body: paginatedBody,
            params: paginatedQuery,
            ...resolvedBaseURL ? { baseURL: resolvedBaseURL } : {},
            ...restOptions
          });
          const meta = extractPaginationMetaFromHeaders(response.headers, activePaginationConfig);
          if (meta.total !== void 0) paginationState.value.total = meta.total;
          if (meta.totalPages !== void 0) paginationState.value.totalPages = meta.totalPages;
          if (meta.currentPage !== void 0) paginationState.value.currentPage = meta.currentPage;
          if (meta.perPage !== void 0) paginationState.value.perPage = meta.perPage;
          data = unwrapDataKey(response._data, activePaginationConfig);
        } else {
          const rawData = await $fetch(modifiedContext.url, {
            method: modifiedContext.method,
            headers: paginatedHeaders,
            body: paginatedBody,
            params: paginatedQuery,
            ...resolvedBaseURL ? { baseURL: resolvedBaseURL } : {},
            ...restOptions
          });
          const meta = extractPaginationMetaFromBody(rawData, activePaginationConfig);
          if (meta.total !== void 0) paginationState.value.total = meta.total;
          if (meta.totalPages !== void 0) paginationState.value.totalPages = meta.totalPages;
          if (meta.currentPage !== void 0) paginationState.value.currentPage = meta.currentPage;
          if (meta.perPage !== void 0) paginationState.value.perPage = meta.perPage;
          data = unwrapDataKey(rawData, activePaginationConfig);
        }
      } else {
        data = await $fetch(modifiedContext.url, {
          method: modifiedContext.method,
          headers: modifiedContext.headers,
          body: toValue(modifiedContext.body),
          params: toValue(modifiedContext.params),
          ...resolvedBaseURL ? { baseURL: resolvedBaseURL } : {},
          ...restOptions
        });
      }
      if (pick) {
        data = applyPick(data, pick);
      }
      if (transform) {
        data = transform(data);
      }
      if (mergedCallbacks.onSuccess) {
        await mergedCallbacks.onSuccess(data, {
          url: finalUrl,
          method,
          headers: modifiedContext.headers
        });
      }
      return data;
    } catch (error) {
      if (mergedCallbacks.onError) {
        await mergedCallbacks.onError(error, { url: finalUrl, method, headers });
      }
      throw error;
    } finally {
      if (mergedCallbacks.onFinish) {
        await mergedCallbacks.onFinish({
          url: finalUrl,
          method,
          headers: { ...getGlobalHeaders(), ...headers }
        });
      }
    }
  };
  const resolvedKey = isMutation ? `${key}-${crypto.randomUUID()}` : computedKey;
  const result = useAsyncData(resolvedKey, fetchFn, {
    immediate,
    lazy,
    server,
    dedupe,
    watch: effectiveWatchOption === false ? [] : watchSources
  });
  if (!paginated) return result;
  const hasNextPage = computed(() => paginationState.value.currentPage < paginationState.value.totalPages);
  const hasPrevPage = computed(() => paginationState.value.currentPage > 1);
  const goToPage = (n) => {
    page.value = n;
  };
  const nextPage = () => {
    if (hasNextPage.value) goToPage(page.value + 1);
  };
  const prevPage = () => {
    if (hasPrevPage.value) goToPage(page.value - 1);
  };
  const setPerPage = (n) => {
    perPage.value = n;
    page.value = 1;
  };
  return {
    ...result,
    pagination: computed(() => ({
      ...paginationState.value,
      hasNextPage: hasNextPage.value,
      hasPrevPage: hasPrevPage.value,
      goToPage,
      nextPage,
      prevPage,
      setPerPage
    }))
  };
}
function useAsyncDataGetPostById(...args) {
  const _hasKey = typeof args[0] === "string";
  const params = _hasKey ? args[1] : args[0];
  const options = _hasKey ? { cacheKey: args[0], ...args[2] } : args[1];
  const p = isRef(params) ? params : shallowRef(params);
  return useApiAsyncData(
    "useAsyncDataGetPostById",
    () => `/posts/${p.value.path.postId}`,
    {
      method: "GET",
      baseURL: "https://jsonplaceholder.typicode.com",
      ...options
    }
  );
}
const postsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "openapi-demo",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: posts, pending, error, refresh } = useFetchListPosts({});
    const currentPage = ref(1);
    computed(() => Math.ceil((posts.value?.length ?? 0) / postsPerPage));
    computed(() => {
      const start = (currentPage.value - 1) * postsPerPage;
      return (posts.value ?? []).slice(start, start + postsPerPage);
    });
    const selectedId = ref(null);
    const { data: selectedPost, status } = useAsyncDataGetPostById(
      computed(() => ({ path: { postId: selectedId.value ?? 0 } })),
      { lazy: true, server: false }
    );
    const newTitle = ref("");
    const newBody = ref("");
    const creating = ref(false);
    const createdPost = ref(null);
    async function handleCreate() {
      creating.value = true;
      try {
        const result = await createPost({ body: { title: newTitle.value, body: newBody.value, userId: 1 } });
        createdPost.value = result.data;
        newTitle.value = "";
        newBody.value = "";
        refresh();
      } finally {
        creating.value = false;
      }
    }
    ref(null);
    ref("");
    ref("");
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-4xl px-4 py-8" }, _attrs))}><h1 class="mb-2 text-3xl font-bold">OpenAPI Demo — JSONPlaceholder</h1><p class="mb-8 text-muted-foreground"> Demo utilisant les composables générés par <code>nuxt-openapi-hyperfetch</code>. </p><section class="mb-8 rounded-lg border p-6"><h2 class="mb-4 text-xl font-semibold">Créer un post</h2><div class="flex flex-col gap-3 sm:flex-row"><input${ssrRenderAttr("value", unref(newTitle))} placeholder="Titre" class="flex-1 rounded-md border px-3 py-2"><input${ssrRenderAttr("value", unref(newBody))} placeholder="Contenu" class="flex-1 rounded-md border px-3 py-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        disabled: unref(creating) || !unref(newTitle),
        onClick: handleCreate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(creating) ? "Création..." : "Créer")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(creating) ? "Création..." : "Créer"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(createdPost)) {
        _push(`<div class="mt-3 text-sm text-green-600"> ✅ Post #${ssrInterpolate(unref(createdPost).id)} créé : &quot;${ssrInterpolate(unref(createdPost).title)}&quot; </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section><div class="mb-4 flex items-center justify-between"><h2 class="text-xl font-semibold">Liste des posts</h2>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        size: "sm",
        onClick: () => unref(refresh)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rafraîchir `);
          } else {
            return [
              createTextVNode(" Rafraîchir ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 text-center text-muted-foreground"${_scopeId}> Chargement... </div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 text-center text-muted-foreground" }, " Chargement... ")
            ];
          }
        })
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/openapi-demo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=openapi-demo-D9gN08rc.mjs.map
