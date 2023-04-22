import { PipelineStage } from '@/types';

export const pipelineStages: PipelineStage[] = [
  {
    step: 1,
    title: 'Source',
    imageName: 'source.png',
    purpose: 'Copy updated source code from the repository.',
    how: "When code is updated, GitHub sends a webhook to trigger the pipeline. Seamless uses the user's GitHub OAuth token to clone the code and locally checks out the git hash specified in the webhook. Finally, it installs all dependencies, including dev dependencies for testing.",
  },
  {
    step: 2,
    title: 'Code Quality',
    imageName: 'code-quality.png',
    purpose: 'Ensure high quality code.',
    how: 'Seamless executes the user-provided code quality command, which could be static code analysis such as as "npm run lint". Improvements to Seamless could include performing security scans.',
  },
  {
    step: 3,
    title: 'Unit Test',
    imageName: 'unit-test.png',
    purpose: 'Test the service in isolation.',
    how: 'Seamless executes the user-provided unit test command, which could be "npm run test". This validates the functionality of individual code components.',
  },
  {
    step: 4,
    title: 'Build Image',
    imageName: 'build-image.png',
    purpose: 'Create a deployable artifact from the updated code.',
    how: "With the Docker CLI, Seamless uses the user-supplied Dockerfile to build an image, tag it with the git commit hash, and push it to ECR. It uses the AWS SDK to authenticate with ECR and also create a repo if it doesn't already exist.",
  },
  {
    step: 5,
    title: 'Integration Test',
    imageName: 'integration-test.png',
    purpose: 'Test services with its dependencies, together as a system.',
    how: 'The user provides a separate testing application (repo + Dockerfile) which will make network calls to the newly updated service. They also provide a Docker Compose YAML file specifying all dependencies. Seamless updates the YAML with the latest image tags, pulls all dependency images, and runs the integration test. It monitors the exit code of the test container to determine test pass/fail.',
  },
  {
    step: 6,
    title: 'Staging',
    imageName: 'staging.png',
    purpose: 'Deploy the updated service to an environment for QA checks.',
    how: "Seamless retrieves the service's current ECS Task Definition and updates it with the new Docker image from the Build Stage. It registers this updated Task Definition and forces a redeployment of the ECS Fargate Service. The user performs QA checks and can then click the Approve button in the UI.",
  },
  {
    step: 7,
    title: 'Production',
    imageName: 'production.png',
    purpose: 'Deploy the updated service so it is available for end-users.',
    how: 'The process is the same as for Staging, but there is no Manual Approve button. The deployment target is the Production Fargate Cluster. If the user would like to perform Continuous Deployment, the code is deployed directly to Production, skipping Staging. After this, the service is live! 🚀',
  },
];
