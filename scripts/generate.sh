#!/bin/bash

set -e

source .env

echo "Fetching openapi.json from $REMOTE_HOST..."
curl http://$REMOTE_HOST:$REMOTE_PORT/openapi.json -o ./generated/openapi.json

echo "Generating API client..."
npx swagger-typescript-api generate --path ./generated/openapi.json --output ./generated --js
