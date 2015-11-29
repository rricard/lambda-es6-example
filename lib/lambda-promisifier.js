/* @flow */

import type {LambdaContext} from "./lambda-types.js";

export function lambdaPromisifier(
  lambda: (options: any, context: LambdaContext) => void
): (options: any) => Promise<any> {
  return (options: any) =>
    new Promise((resolve, reject) =>
      lambda(options, {
        succeed: resolve,
        fail: reject,
        done: (err, res) => err ? reject(err) : resolve(res),
        getRemainingTimeInMillis: () => Infinity,
        functionName: "fakeLambda",
        functionVersion: "0",
        invokedFunctionArn: "arn:aws:lambda:fake-region:fake-acc:function:fakeLambda",
        memoryLimitInMB: Infinity,
        awsRequestId: "fakeRequest",
        logGroupName: "fakeGroup",
        logStreamName: "fakeStream",
        identity: null,
        clientContext: null
      })
    );
};
