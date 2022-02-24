import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root'
})

export class NugetSourceService {
  public sources: string[] = [];

  constructor(private readonly electronService: ElectronService) {
    let spawn = electronService.childProcess.spawn;
    let command = spawn("dotnet", ["nuget", "list", "source"]);
    var raw: string = "";
    command.stdout.on("data", (data) => {
      raw = raw + data.toString()
      this.sources = this.processData(raw);
    });
  }

  private processData(data: string): string[] {
    let result: string[] = [];
    let lines = data.split("\n");
    for (let line of lines) {
      let regex = /  [0-9]*.  (.*) \[Enabled\]/
      let matches = line.match(regex);
      if(matches != null && matches.length > 1) {
        result.push(matches[1]);
      }
    }
    return result;
  }
}
