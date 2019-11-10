FROM lambci/lambda:build-nodejs10.x

ARG AWS_SECRET_ACCESS_KEY
ARG AWS_ACCESS_KEY_ID

ENV AWS_DEFAULT_REGION us-east-1

COPY ./ /var/task
RUN npm install

RUN npm add -g serverless
RUN npm add -g serverless-offline

RUN serverless config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY}

CMD npm run build && serverless deploy
