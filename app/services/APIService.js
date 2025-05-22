export const baseUrl =
  "https://example.com";
export const stageName = "/dev";

const basePrefix = baseUrl;
import {
  NO_APP_VERSION_FOUND,
  NO_SESSION_FOUND,
  NO_TOKEN_FOUND,
} from "../enums/constants";
//  + stageName;

import StorageService from "./StorageService";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const authToken = StorageService.getAuthToken();
  const sessionId = StorageService.getSessionId();
  const appVersion = StorageService.getAppVersion();
  if (authToken && authToken !== NO_TOKEN_FOUND) {
    headers.Authorization = authToken;
  }
  if (sessionId && sessionId !== NO_SESSION_FOUND) {
    headers.SessionId = sessionId;
  }
  if (
    appVersion &&
    appVersion !== NO_APP_VERSION_FOUND &&
    appVersion.currentVersion
  ) {
    headers.AppVersion = appVersion.currentVersion;
  }

  return headers;
};

export const GET = (path) => {
  return new Promise((resolve, reject) => {
    fetch(basePrefix + path, {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });
};

export const POST = (path, data) => {
  return new Promise((resolve, reject) => {
    fetch(basePrefix + path, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

export const POSTFILE = (path, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, reject) => {
    fetch(basePrefix + path, {
      method: "POST",
      headers: { ...getHeaders(), "Content-Type": "multipart/form-data" },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

export const PUT = (path, data) => {
  return new Promise(async (resolve, reject) => {
    fetch(basePrefix + path, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

export const DELETE = (path, data) => {
  return new Promise(async (resolve, reject) => {
    fetch(basePrefix + path, {
      method: "DELETE",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
};
