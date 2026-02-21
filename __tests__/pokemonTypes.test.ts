import {
  bulbasaurMock,
  charmanderMock,
  squirtleMock,
} from "../__mocks__/pokemonMocks"

describe("Pokemon type tests", () => {

  test("Bulbasaur is Grass type", () => {
    expect(bulbasaurMock.types).toContain("Grass")
  })

  test("Charmander is Fire type", () => {
    expect(charmanderMock.types).toContain("Fire")
  })

  test("Squirtle is Water type", () => {
    expect(squirtleMock.types).toContain("Water")
  })

})