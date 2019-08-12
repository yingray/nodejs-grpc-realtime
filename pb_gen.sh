#!/bin/bash
set -e
function print() {
  echo "`tput setaf 3`$1`tput sgr0`"
}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIR_PB="$DIR/protos"
DIR_FRONTEND="$DIR/frontend/src"

# build grpc protos for Web
print "build grpc protos for Web"
protoc -I=$DIR $DIR_PB/*.proto \
  --js_out=import_style=commonjs:$DIR_FRONTEND \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$DIR_FRONTEND

print "build grpc done"