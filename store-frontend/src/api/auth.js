import { api } from "./client";

export function login(data) {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export function register(data) {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(data)
  });
}