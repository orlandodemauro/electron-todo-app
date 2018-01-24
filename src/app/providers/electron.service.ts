import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import { ipcPromise } from 'ipc-promise';

import * as childProcess from 'child_process';

@Injectable()
export class ElectronService {

    ipcPromise : typeof ipcPromise ;
  childProcess: typeof childProcess;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcPromise = window.require('ipc-promise');
      
      this.childProcess = window.require('child_process');
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

  send = (message, payload) => {
    return this.ipcPromise.send(message, payload);
  }

}
