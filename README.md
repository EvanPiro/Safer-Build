# Safer-Build
A Tool for developers to safety deploy a production Lambda function from local.

## Summary
This repo provides the basic foundation for a Node.js via TypeScript project that will be deployed to AWS Lambda. The deployment uses a [docker-lambda](https://github.com/lambci/docker-lambda) image to replicate the production environment and uses the environment's internal resources to build and ship the application artifact. Deployment employs [serverless](https://serverless.com/) for abstracting away some of the config-heavy deployment code.

## Set Up
Because deployments will occur on AWS, you will need to add your aws keys to your environment variables i.e in ~/.bash_profiles for repeated use in the following form: 

```
# AWS Keys
export AWS_ACCESS_KEY_ID=<secret>
export AWS_SECRET_ACCESS_KEY=<secret>
```

## Deployment

Running `yarn deploy` will build the app in a local production environment and ship it to AWS. The resulting logs from the process will provide the public URLs the app is running behind. Look to [serverless.yml](https://github.com/EvanPiro/Safer-Build/blob/master/serverless.yml) for configurations you want to make around your prod service.

## Development

Running `yarn dev` will spin up a development environment using local resources.

