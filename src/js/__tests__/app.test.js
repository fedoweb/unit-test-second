import sortPlayers from "../app";

test.each([
    [[
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ], [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]],
      [[
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 0},
      ], [
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 0},
      ]],
])(
('should return the correct sort players'), (input, expected) => {
    let result = sortPlayers(input);

    expect(result).toEqual(expected);
})