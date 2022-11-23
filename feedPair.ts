import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

class BlockParser {

  
    scanHistory(): void {
        let lastBlock = this.getLastBlock();
        // get latest block
        // filter from block to latest
        // continue to scan
    }

    getLastBlock(): Number {
        return 8
    }
  
  }
  
  const reptile = new BlockParser();
  // start scanning to last block