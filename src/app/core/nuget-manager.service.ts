import { Injectable } from '@angular/core';
import { NugetSourceService } from './nuget-source.service';

@Injectable({
  providedIn: 'root'
})

export class NugetManagerService {
  public rootPath?: string = undefined;
  public source?: string = undefined;

  constructor() { 

  }
}
