import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NugetManagerService } from '../core/nuget-manager.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  pathInputControl = new FormControl('', [Validators.required]);

  constructor(private readonly _nugetManager: NugetManagerService) { }

  ngOnInit(): void {
    this.pathInputControl.setValue(this._nugetManager.rootPath);
  }
  
  save() {
    this._nugetManager.rootPath = this.pathInputControl.value;
  }

}
