"use strict";

const fs = require("fs");
const bencode = require("bencode");
const crypto = require("crypto");

module.exports.BLOCK_LEN = Math.pow(2, 14);

module.exports.open = (filepath) => {
  return bencode.decode(fs.readFileSync(filepath));
};

module.exports.infoHash = (torrent) => {
  const info = bencode.encode(torrent.info);
  return crypto.createHash("sha1").update(info).digest();
};

module.exports.size = (torrent) => {
  const size = torrent.info.files
    ? torrent.info.files.reduce((acc, file) => acc + file.length, 0)
    : torrent.info.length;

  // Convert size to buffer equivalent of 8 bytes (64-bit)
  return Buffer.alloc(8, size.toString(16), "hex");
};

module.exports.pieceLen = (torrent, pieceIndex) => {
  const totalLength = this.size(torrent).readBigUInt64BE();
  const pieceLength = torrent.info["piece length"];

  const lastPieceLength = totalLength % BigInt(pieceLength);
  const lastPieceIndex = totalLength / BigInt(pieceLength);

  return lastPieceIndex === BigInt(pieceIndex)
    ? Number(lastPieceLength)
    : pieceLength;
};

module.exports.blocksPerPiece = (torrent, pieceIndex) => {
  const pieceLength = this.pieceLen(torrent, pieceIndex);
  return Math.ceil(pieceLength / this.BLOCK_LEN);
};

module.exports.blockLen = (torrent, pieceIndex, blockIndex) => {
  const pieceLength = this.pieceLen(torrent, pieceIndex);

  const lastPieceLength = pieceLength % this.BLOCK_LEN;
  const lastPieceIndex = Math.floor(pieceLength / this.BLOCK_LEN);

  return blockIndex === lastPieceIndex ? lastPieceLength : this.BLOCK_LEN;
};
