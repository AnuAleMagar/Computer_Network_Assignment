"use strict";
const fs = require("fs");
const bencode = require("bencode");

const torrentData = fs.readFileSync("puppy.torrent");
console.log(torrentData.toString("utf8"));

const torrent = bencode.decode(torrentData);
console.log(torrent.announce.toString("utf8"));
