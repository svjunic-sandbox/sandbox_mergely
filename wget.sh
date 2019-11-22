#!/bin/bash

. config.sh

list=`cat list.txt`
hostname=""
useragent=""

target=$1
device=$2


if [ ! -n "$target" ] ; then
  echo 'ディレクトリ名が必要です。'
  return
fi

if [ ! -n "$device" ] ; then
  echo 'デバイスが必要です'
  return
fi

id="${target}_${device}"


case "$id" in
  "old_pc" )
    hostname=$old_pc
    ua=$uapc
    break;;
  "old_sp" )
    hostname=$old_sp
    ua=$uasp
    break;;
  "old_mb" )
    hostname=$old_mb
    ua=$uamb
    break;;
  "new_pc" )
    hostname=$new_pc
    ua=$uapc
    break;;
  "new_sp" )
    hostname=$new_sp
    ua=$uasp
    break;;
  "new_mb" )
    hostname=$new_mb
    ua=$uamb
    break;;
esac

while read line
do
  #echo "${hostname}${line}"
  wget --user-agent="$ua" -x -P html/${id} ${hostname}${line}
done << FILE
$list
FILE
