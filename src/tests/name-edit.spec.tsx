import React from "react";
import { render, screen, fireEvent} from '@testing-library/react';
import {NameEdit} from '../name-edit';
import userEvent from '@testing-library/user-event';

describe('NameEdit', () => {
    it('test 1', () => {
        // ARRANGE
        render(<NameEdit />)
        // ACT
        const h3Element = screen.getByRole('heading', { level : 3});
        const inputElement = screen.getByRole('textbox') as HTMLInputElement;

        // ASSERT
        expect(h3Element).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    })

    it('test 2 change H3 y input', async () => {
      // ARRANGE
      render(<NameEdit />)
      // ACT
      const h3Element = screen.getByRole('heading', { level : 3});
      const inputElement = screen.getByRole('textbox') as HTMLInputElement;

      await userEvent.type(inputElement, 'John');
      // ASSERT
      expect(h3Element).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();
      expect(inputElement.value).toEqual("John");
      expect(h3Element.textContent).toEqual("John");
  })
});
