import {sortHeroesByHealth} from '../../src/sort';

test('Герои сортируются правильно по здоровью', () => {
  const inputData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
  ];

  // Ожидаемый результат
  const expectedResult = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ];

  expect(sortHeroesByHealth(inputData)).toEqual(expectedResult); // Используем toEqual для глубокого сравнения объектов
});

test('Работает даже если герои имеют одинаковое здоровье', () => {
  const inputData = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 }
  ];

  // Порядок сохраняется тот же, поскольку у всех одинаковый уровень здоровья
  const expectedResult = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 }
  ];

  expect(sortHeroesByHealth(inputData)).toEqual(expectedResult);
});

test('Правильно обрабатывается пустой массив', () => {
  const inputData = [];
  const expectedResult = [];

  expect(sortHeroesByHealth(inputData)).toEqual(expectedResult);
});

test('Отрицательные значения здоровья также учитываются', () => {
  const inputData = [
    { name: 'герой_1', health: -10 },
    { name: 'герой_2', health: -100 },
    { name: 'герой_3', health: -50 }
  ];

  const expectedResult = [
    { name: 'герой_1', health: -10 },
    { name: 'герой_3', health: -50 },
    { name: 'герой_2', health: -100 }
  ];

  expect(sortHeroesByHealth(inputData)).toEqual(expectedResult);
});