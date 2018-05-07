import crypto from 'crypto';

exports.work = (limit = 100000) => {
    let start = Date.now();
    for(let i = 0; i <= limit; i++) {
      crypto.randomBytes(2048);
    }
    return Date.now();
  }
