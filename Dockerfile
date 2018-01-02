FROM node:8-alpine
LABEL Name="ComparaOnline reviews-admin" Version="1.0"

ARG ENVIRONMENT="production"

ENV \
  NODE_ENV=${ENVIRONMENT} \
  BUILD_LIBRDKAFKA=0

EXPOSE 4000

WORKDIR /code

COPY package.json yarn.lock ./

RUN \
  # Build packages are not included in the final Docker image.
  apk add --no-cache --virtual .build-packages \
    bash \
    make \
    g++ \
    python \
    && \
  # Install node packages
  yarn install \
    && \
  yarn cache clean \
    && \
  # Clean up build packages.
  apk del .build-packages

COPY config/ ./config
COPY build/  ./


CMD ["node", "index.js"]
