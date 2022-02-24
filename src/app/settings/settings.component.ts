import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NugetManagerService } from '../core/nuget-manager.service';
import { NugetSourceService } from '../core/nuget-source.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  pathInputControl = new FormControl('', [Validators.required]);
  sourceControl = new FormControl('', [Validators.required]);

  constructor(private readonly _nugetManager: NugetManagerService, 
    private readonly _nugetSourceService: NugetSourceService) { }

  ngOnInit(): void {
    this.pathInputControl.setValue(this._nugetManager.rootPath);
    this.pathInputControl.setValue(this._nugetManager.source);
  }
  
  save() {
    this._nugetManager.rootPath = this.pathInputControl.value;
    this._nugetManager.source = this.sourceControl.value;
  }

  getSources() {
    return this._nugetSourceService.sources;
  }
}
