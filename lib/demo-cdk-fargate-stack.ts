import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';

export class DemoCdkFargateStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "MyVpcCluster", {
      maxAzs: 1,
    })

    const cluster = new ecs.Cluster(this, "MyCluster", {
      vpc: vpc
    })

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster,
      cpu: 256,
      desiredCount: 2,
      taskImageOptions: {image: ecs.ContainerImage.fromAsset(path.resolve)},
      memoryLimitMiB: 512,
      publicLoadBalancer: true
    })
  }
}
