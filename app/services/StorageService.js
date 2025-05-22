import {
  NO_TOKEN_FOUND,
  NO_SESSION_FOUND,
  NO_APP_VERSION_FOUND,
} from "../enums/constants";

const getAuthToken = () => {
  return (
    JSON.parse(localStorage.getItem("bigestate_client_auth_token")) ||
    NO_TOKEN_FOUND
  );
};

const setAuthToken = (token) => {
  if (!token) return;
  return localStorage.setItem(
    "bigestate_client_auth_token",
    JSON.stringify(token)
  );
};

const removeAuthToken = () => {
  return localStorage.removeItem("bigestate_client_auth_token");
};

const getSessionId = () => {
  return (
    JSON.parse(localStorage.getItem("bigestate_client_session_id")) ||
    NO_SESSION_FOUND
  );
};

const setSessionId = (sessionId) => {
  if (!sessionId) return;
  return localStorage.setItem(
    "bigestate_client_session_id",
    JSON.stringify(sessionId)
  );
};

const removeSessionId = () => {
  return localStorage.removeItem("bigestate_client_session_id");
};

const getAppVersion = () => {
  return (
    JSON.parse(localStorage.getItem("bigestate_client_app_version")) ||
    NO_APP_VERSION_FOUND
  );
};

const setAppVersion = (appVersion) => {
  if (!appVersion) return;
  return localStorage.setItem(
    "bigestate_client_app_version",
    JSON.stringify(appVersion)
  );
};

const removeAppVersion = () => {
  return localStorage.removeItem("bigestate_client_app_version");
};

const getSavedLoginInfo = () => {
  return (
    JSON.parse(localStorage.getItem("bigestate_client_saved_login_info")) ||
    NO_SESSION_FOUND
  );
};

const setSavedLoginInfo = (data) => {
  if (!data) return;
  return localStorage.setItem(
    "bigestate_client_saved_login_info",
    JSON.stringify(data)
  );
};

const removeSavedLoginInfo = () => {
  return localStorage.removeItem("bigestate_client_saved_login_info");
};

const getFcmToken = () => {
  return JSON.parse(localStorage.getItem("bigestate_client_fcm_token"));
};

const setFcmToken = (data) => {
  if (!data) return;
  return localStorage.setItem(
    "bigestate_client_fcm_token",
    JSON.stringify(data)
  );
};

const removeFcmToken = () => {
  return localStorage.removeItem("bigestate_client_fcm_token");
};

export default {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  setSessionId,
  getSessionId,
  removeSessionId,
  getAppVersion,
  setAppVersion,
  removeAppVersion,
  getSavedLoginInfo,
  setSavedLoginInfo,
  removeSavedLoginInfo,
  getFcmToken,
  setFcmToken,
  removeFcmToken,
};
