import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(date: Date | undefined): unknown {
    if (!date) {
      return;
    }

    const dateStringify = date.toString();

    let time = (Date.now() - Date.parse(dateStringify)) / 1000;

    if (time < 10) {
      return 'just now';
    } else if (time < 60) {
      return 'a moment ago';
    }

    const divider = [60, 60, 24, 30, 12];
    const string = [' second', ' minute', ' hour', ' day', ' month', ' year'];
    let i = 0;
    for (i; Math.floor(time / divider[i]) > 0; i++) {
      time /= divider[i];
    }
    const plural = Math.floor(time) > 1 ? 's' : '';
    return Math.floor(time) + string[i] + plural + ' ago';
  }
}
