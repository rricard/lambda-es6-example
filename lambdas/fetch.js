/* @flow */

import fetch from "node-fetch";

import type {LambdaContext} from "../lib/lambda-types.js";

type FetchOptions = {
  url: string,
  method?: string,
  headers?: {[key: string]: string},
  body?: string
};

export function handler({
  url,
  method,
  headers,
  body
}: FetchOptions, context: LambdaContext): void {
  fetch(url, {
    method: method || "GET",
    headers: headers || {},
    body: body
  })
  .then(res => res.text())
  .then(context.succeed, context.fail);
}
