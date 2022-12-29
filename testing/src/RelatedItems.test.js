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


import RelatedItems from "../../client/src/components/relatedItems.jsx";
// import RelatedProductsList from "../../client/src/components/relatedItems/RelatedProductsList.jsx"

import {getOutfitListInCookie, addOutfitListToCookie, deleteOutfitIdInCookie} from '../../helpers/helpers.js';



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

  //worst case
  // it("shouldn't load single card", () => {
  //   render(<RelatedItems productId={12345}/>)
  //   expect().toBeInTheDocument();
  // })

});





describe("helper function cookie part1 getOutfitListInCookie", () => {

  it("should not get cookie named 'outfitList' if it does not exist", () => {
    document.cookie = "newName=[]; ";

    expect(getOutfitListInCookie()).toBeUndefined();
  })

  it("should get specific cookie by name 'outfitList' ", () => {
    document.cookie = "outfitList=[2,1]; ";
    expect(getOutfitListInCookie()).toEqual([2,1]);
  })
})


