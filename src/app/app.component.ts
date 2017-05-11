import { Component } from '@angular/core';
import { LogLevel, LogMessage, LogFormat, MessageFormatUtils } from 'typescript-logging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';

  public ngOnInit(): void {
    this.title += this.method(new Date()) + ' ' + AppComponent.method2(new Date());
    let result: string = '';
    result += this.method(new Date()) + ' ' + AppComponent.method2(new Date());
  }

  private method(arg1: any): string {
    return `${arg1}`;
  }

  private static method2(arg1: any): string {
    return `${arg1}`;
  }

  protected createDefaultLogMessage(msg: LogMessage): string {
    const format: LogFormat = msg.logGroupRule.logFormat;
    let result: string = '';
    if (format.showTimeStamp) {
      result += MessageFormatUtils.renderDate(msg.date, format.dateFormat) + ' ';
    }

    result += LogLevel[msg.level].toUpperCase() + ' ';
    if (format.showLoggerName) {
      result += `[${msg.loggerName}]`;
    }

    result += ' ' + msg.message;
    if (msg.errorAsStack !== null) {
      result += '\n' + msg.errorAsStack;
    }

    return result;
  }
}
