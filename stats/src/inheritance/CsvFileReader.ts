import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  
  constructor(public filename: string) {}
  
  abstract mapRow(row : string[]) : T;

  read(): T[] {
    this.data = fs.readFileSync(this.filename, {encoding: 'utf-8'}).split('\n').map((line: string) : string[] => {
      return line.split(',')
    }).map(this.mapRow)
    return this.data;
  }

}
