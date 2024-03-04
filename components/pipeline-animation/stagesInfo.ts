import { PipelineStage } from '@/types';

export const pipelineStages: PipelineStage[] = [
  {
    step: 1,
    title: 'Source',
    imageName: 'source.webp',
    purpose: 'Copy updated source code from the repository.',
    how: 'Upon code updates, GitHub sends a webhook to trigger the pipeline. Seamless clones the code, checks out the specified git hash, and installs all dependencies.',
  },
  {
    step: 2,
    title: 'Code Quality',
    imageName: 'code-quality.webp',
    purpose: 'Perform automatic checks for code quality.',
    how: 'Seamless executes the user-provided code quality command, such as static code analysis with "npm run lint."',
  },
  {
    step: 3,
    title: 'Unit Test',
    imageName: 'unit-test.webp',
    purpose: "Test the service's functionality, in isolation.",
    how: 'Seamless executes the user-provided unit test command, such as "npm run test." This validates functionality of individual services.',
  },
  {
    step: 4,
    title: 'Build Image',
    imageName: 'build-image.webp',
    purpose: 'Create a deployable artifact from the updated code.',
    how: "Seamless uses the Dockerfile to build an image, tag it with the git commit hash, and push it to ECR, creating a repo if it doesn't already exist.",
  },
  {
    step: 5,
    title: 'Integration Test',
    imageName: 'integration-test.webp',
    purpose: 'Test the service with its dependencies, together as a system.',
    how: 'The user provides a Docker Compose YAML file specifying all dependencies. Seamless updates the YAML with the latest image tags, pulls all images, and runs the integration tests. It monitors the exit code of the test container to determine test pass/fail.',
  },
  {
    step: 6,
    title: 'Staging',
    imageName: 'staging.webp',
    purpose: 'Deliver the updated service to an environment for QA checks.',
    how: "Seamless retrieves the current ECS Task Definition and updates it with the new Docker image from the Build Stage. It then redeploys the Fargate Service. The user performs QA checks in staging, and clicks the Approve button in Seamless's UI to promote the service to Production.",
  },
  {
    step: 7,
    title: 'Production',
    imageName: 'production.webp',
    purpose: 'Deploy the updated service so it is available for end-users.',
    how: 'The user has the option of performing Continuous Deployment by sending the application straight to Production, skipping Staging. After this, the service is live! 🚀',
  },
];
