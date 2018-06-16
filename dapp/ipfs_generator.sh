#!/bin/bash

mkdir -p IPFS

perl -nle 'print "$1" if /src="(.*\.js)"/' index.html | tar -czf js.tar.gz --files-from - ; tar -xzvf js.tar.gz -C ./IPFS/
perl -nle 'print "$1" if /href="(.*\.css)"/' index.html | tar -czf css.tar.gz --files-from - ; tar -xzvf css.tar.gz -C ./IPFS/
perl -nle 'print "$1" if /href="(.*\.png)"/' index.html | tar -czf png.tar.gz --files-from - ; tar -xzvf png.tar.gz -C ./IPFS/
perl -nle 'print "$1" if /src="(.*\.svg)"/' index.html | tar -czf svg.tar.gz --files-from - ; tar -xzvf svg.tar.gz -C ./IPFS/

mkdir -p ./IPFS/node_modules/font-awesome/fonts/
cp ./node_modules/font-awesome/fonts/* ./IPFS/node_modules/font-awesome/fonts/

cp ./img/gnosis-logo.svg ./IPFS/img/
cp index.html IPFS
cp ./fonts ./IPFS

rm js.tar.gz css.tar.gz png.tar.gz svg.tar.gz