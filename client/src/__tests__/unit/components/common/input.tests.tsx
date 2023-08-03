import React from 'react'
import {useState as useStateMock} from 'react'
import {userEvent} from "@storybook/testing-library";
import {render} from "@testing-library/react";
import {Input} from "@components/common/input/Input";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

const setState = jest.fn();

describe('Input component Unit test', () => {
  const user = userEvent.setup();

  test('state reset', () => {
    const type = 'text';
    let inputState = 'unit test';

    render(
      <Input
        type={type}
        value={inputState}
        onChange={e => (inputState = e.target.value)}
      />);

  })
})