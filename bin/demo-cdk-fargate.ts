#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { DemoCdkFargateStack } from '../lib/demo-cdk-fargate-stack';

const app = new cdk.App();
new DemoCdkFargateStack(app, 'DemoCdkFargateStack');
