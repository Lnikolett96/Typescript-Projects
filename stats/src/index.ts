import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader('football.csv');
const matches = csvFileReader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

console.log(matches)