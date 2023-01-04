let cookie = ""
Object.defineProperty(document, 'cookie', {
  get: () => cookie,
  set: (str) => {
    cookie = str
  }
});
import React from "react";
import {getOutfitListInCookie, addOutfitListToCookie, deleteOutfitIdInCookie} from '../../helpers/helpers.js';

/**************** helper function test ***********************/

describe("helper function cookie getOutfitListInCookie", () => {
  beforeAll(() => {
    cookie = "";
  })

  it("should not get cookie named 'outfitList' if it does not exist", () => {
    document.cookie = "newName=[]; ";

    expect(getOutfitListInCookie()).toBeUndefined();
  })

  it("should get specific cookie by name 'outfitList' ", () => {
    document.cookie = "outfitList=[2,1]; ";
    expect(getOutfitListInCookie()).toEqual([2,1]);

  })
})


describe("helper function cookie addOutfitListToCookie", () => {
  beforeAll(() => {
    cookie = "";
  })

  it("should add cookie named 'outfitList' if it does not exist", () => {
    addOutfitListToCookie(5);
    let outfitList = getOutfitListInCookie();
    expect(outfitList).toEqual([5]);
  })

  it("should not add same cookie value ", () => {
    addOutfitListToCookie(5);
    let outfitList = getOutfitListInCookie();
    expect(outfitList).toEqual([5]);
  })
  it("should add new cookie value if it is new one", () => {
    addOutfitListToCookie(6);
    let outfitList = getOutfitListInCookie();
    expect(outfitList).toEqual([5,6]);
  })
  it("should add new cookie value if it is new one", () => {
    addOutfitListToCookie(6);
    let outfitList = getOutfitListInCookie();
    expect(outfitList).toEqual([5,6]);
  })
  it("should directly add array if input is an array", () => {
    addOutfitListToCookie([1,2]);
    let outfitList = getOutfitListInCookie();
    expect(outfitList).toEqual([1,2]);
  })

})

describe("helper function cookie deleteOutfitIdInCookie", () => {

  beforeAll(() => {
    cookie = "";
  })

  it("should add cookie named 'outfitList' if it does not exist", () => {
    document.cookie = "outfitList=[2,1,3]; ";
    let outfitList = deleteOutfitIdInCookie(1);
    expect(outfitList).toEqual([2,3]);
  })
})