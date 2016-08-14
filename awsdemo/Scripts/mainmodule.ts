/// <reference path="./typings/aws-sdk/aws-sdk.d.ts" />
/// <reference path="require.d.ts" />

import * as AWS from 'aws-sdk'

export class MainModule {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        
    }

    init() {
        alert("38");
        AWS.Config({
            accessKeyId: 'test',
            secretAccessKey: 'teste'
        });
    }
}
