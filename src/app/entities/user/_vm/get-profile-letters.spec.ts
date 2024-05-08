import { getProfileLetters } from "./get-profile-letters";

describe("get profile letters", () => {
  test("should split by .", () => {
    const res = getProfileLetters({
      email: "vitaly.menshikov@gmail.com",
    });

    expect(res).toEqual("VM");
  });

  test("should split by -", () => {
    const res = getProfileLetters({
      email: "avgeny.menshikov@gmail.com",
      name: "Vitaly-Menshikov",
    });

    expect(res).toEqual("VM");
  });

  test("should split by _", () => {
    const res = getProfileLetters({
      email: "avgeny.menshikov@gmail.com",
      name: "Vitaly_Menshikov",
    });

    expect(res).toEqual("VM");
  });

  test("should split by space", () => {
    const res = getProfileLetters({
      email: "vitaly.menshikov@gmail.com",
      name: "Vitaly Menshikov",
    });

    expect(res).toEqual("VM");
  });

  test("should return first 2 letters if no separator", () => {
    const res = getProfileLetters({
      email: "vitaly.menshikov@gmail.com",
      name: "VitalyMenshikov",
    });

    expect(res).toEqual("VI");
  });

  test("should return first 2 letters if no separator email", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
    });

    expect(res).toEqual("AD");
  });

  test("should return email if empty username", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "",
    });

    expect(res).toEqual("AD");
  });

  test("should work with short names", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "V",
    });

    expect(res).toEqual("V");
  });
});
