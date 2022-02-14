import { Injectable } from '@angular/core';

import * as electron from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  electron: typeof electron;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    this.electron = window.require('electron');
    this.childProcess = window.require('child_process');
    this.fs = window.require('fs');
  }
}