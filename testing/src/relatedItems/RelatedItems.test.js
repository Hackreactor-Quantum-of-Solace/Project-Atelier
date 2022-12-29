let cookie = ""
Object.defineProperty(document, 'cookie', {
  get: () => cookie,
  set: (str) => {
    cookie = str
  }
});



import React from "react";
/* snapshot test way
import * as rend from "react-test-renderer";
describe("single card", function () {
  it ("snapshot should have related items components", function () {
    const component = rend.create(
      <RelatedItems productId={71697}/>
      );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  });
});
*/
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import '@testing-library/jest-dom';

import {render, fireEvent, waitFor, screen} from "@testing-library/react";


import RelatedItems from "../../../client/src/components/relatedItems.jsx";
import RelatedProductsList from "../../client/src/components/relatedItems/RelatedProductsList.jsx";
import SingleCard from "../../client/src/components/relatedItems/SingleCard.jsx";
import OutfitList from "../../client/src/components/relatedItems/OutfitList.jsx";
import ComparisonModal from "../../client/src/components/relatedItems/ComparisonModal.jsx";


import {getOutfitListInCookie, addOutfitListToCookie, deleteOutfitIdInCookie} from '../../helpers/helpers.js';

/**************** RelatedItems.jsx test ***********************/

describe("RelatedItems", () => {

  const server = setupServer(
    rest.get('/products/71697/related', (req, res, ctx) => {
      return res(ctx.json({data:[71700, 71705]}));
    }),
    rest.get('/products/71697', (req, res, ctx) => {
      return res(ctx.json({data:{}}));
    }),
    rest.get('/products/12345/related', (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get('/products/12345', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it("load and display related products list", () => {
    render(<RelatedItems productId={71697}/>)
    expect(screen.getByText("RELATED PRODUCTS")).toBeInTheDocument();
  })

  //worst case, console.log( hard to test, optimizing until time enough)
  // it("shouldn't load single card", () => {
  //   render(<RelatedItems productId={12345}/>)
  //   expect().toBeInTheDocument();
  // })
});



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

/**************** RelatedProductsList.jsx test ***********************/

describe("RelatedProductsList ", () => {
  jest.mock('../../client/src/components/relatedItems/SingleCard.jsx', () => () =>
  <div data-testid="single-card"/>
  )
  it("should contain given related products", () => {
    const {getByTestId} = render(<RelatedProductsList relatedItemsId={[1,2,3,4,5]}/>)

    expect(getByTestId(/single-card/)).toBeInTheDocument();
  })
})

/**************** SingleCard.jsx test ***********************/