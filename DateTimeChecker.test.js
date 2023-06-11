/**
 * @jest-environment jsdom
 */
const { checkDate } = require('./DateTimeChecker.js');

test('UTCID01', () => {
  const day = 29;
  const month = 2;
  const year = 2000;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});

test('UTCID02', () => {
  const day = 29;
  const month = 2;
  const year = 2009;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(false);
});

test('UTCID03', () => {
  const day = 31;
  const month = 2;
  const year = 2020;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(false);
});

test('UTCID04', () => {
  const day = 31;
  const month = 3;
  const year = 2009;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});

test('UTCID05', () => {
  const day = 31;
  const month = 4;
  const year = 2020;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(false);
});

test('UTCID06', () => {
  const day = 30;
  const month = 2;
  const year = 2009;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(false);
});

test('UTCID07', () => {
  const day = 30;
  const month = 3;
  const year = 2009;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});

test('UTCID08', () => {
  const day = 30;
  const month = 4;
  const year = 2020;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});

test('UTCID09', () => {
  const day = 29;
  const month = 3;
  const year = 2009;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});

test('UTCID10', () => {
  const day = 29;
  const month = 4;
  const year = 2000;
  const isValid = checkDate(day, month, year);
  expect(isValid).toBe(true);
});