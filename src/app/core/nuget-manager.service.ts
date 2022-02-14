import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NugetManagerService {
  public rootPath?: string = undefined;

  constructor() { }
}
