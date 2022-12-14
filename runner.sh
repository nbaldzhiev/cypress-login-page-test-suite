#!/bin/bash

#
# The script has been developed and tested on MacOS Ventura 13.01, so there could be some differences with other OSs
# Usage:
#
# The script accepts one optional argument:
#   - controls whether the container image is first built or not. Set it to False in order not to
#     build an image, i.e. ./runner.sh False. Otherwise, an image would be built first.
#
# Examples:
#
# $ ./runner.sh - Default. Builds the docker image.
# $ ./runner.sh False - Does not build an image.
#
# TODO: improve the script to accept keyword arguments, i.e. --build-image=False
#

IMAGE_NAME='cypress-login-tests-image'
APP_NAME='cypress-login-tests-app'
DEFAULT_INTERVAL_SEC=0.5

if docker info ; then
  if [[ $1 != 'False' ]] ; then
    echo 'Starting the process of building a new docker image with the tests app...'
    docker build --tag $IMAGE_NAME .
    echo 'Successfully built the docker image!'
  fi
  docker run -t -d $IMAGE_NAME
  echo 'Ran the container in detached mode.'
  CONTAINER_ID=$(docker ps | grep $IMAGE_NAME | awk '{print $1}')
  while ! docker container exec -iT $CONTAINER_ID ls mochawesome-report
  do
    echo 'Waiting for cypress to complete...'
    sleep $DEFAULT_INTERVAL_SEC
  done
  echo 'cypress has completed!'
  rm -rf mochawesome-report/
  echo 'Cleaned any existing results/ folders...'
  docker cp $CONTAINER_ID:/$APP_NAME/mochawesome-report .
  echo 'Copied the results/ folder from the container to the localhost directory of the repo!'
  docker rm --force $CONTAINER_ID
  echo 'Forcefully removed the container.'
else
  echo 'The command "docker info" was unsuccessful! Please either start or install Docker.'
fi
