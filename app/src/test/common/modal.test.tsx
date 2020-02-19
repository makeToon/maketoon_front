/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import "jest";
import { create, ReactTestRenderer } from "react-test-renderer";

import Modal, { OwnProps } from "components/common/modal";

let wrapper: ReactWrapper<OwnProps>;
let snapshot: ReactTestRenderer;

let isOpen = true;
const setIsOpen = jest.fn((payload: boolean) => {
  isOpen = payload;
});

beforeEach(() => {
  const modal = <Modal isOpen={isOpen} setIsOpen={setIsOpen} />;

  wrapper = mount(modal);
  snapshot = create(modal);
});

describe("<Modal />", () => {
  describe("# UI component (keyup)", () => {
    test("it matches the snapshot", () => {
      expect(snapshot.toJSON()).toMatchSnapshot();
    });

    it("when close button is clicked, it emit event", () => {
      expect(wrapper.props().isOpen).toBe(true);

      const closeButton = wrapper.findWhere(
        node => node.type() === "div" && node.hasClass("wrapper")
      );

      closeButton.simulate("click");

      expect(isOpen).toBe(false);
    });
  });
});
