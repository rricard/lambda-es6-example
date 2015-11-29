/* @flow */

import assert from "assert";

import {lambdaPromisifier} from "../lib/lambda-promisifier.js"
import {handler} from "../lambdas/fetch.js"

const promisifiedFetch = lambdaPromisifier(handler);

describe("fetch lambda", function() {
  it("should be able to make an http call", function(done) {
    promisifiedFetch({url: "http://www.rricard.me"})
    .then(res => {
      assert(/Posts/.test(res));
    })
    .then(() => done(), done);
  });
});
