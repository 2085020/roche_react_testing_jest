import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CookiesDialog } from '../cookies-dialog';

describe('Nombre del componente', () => {
    it('describe el caso de test', () => {
        // ARRANGE
        const props = {
          onAgreeClick: () => {}
        }
        // ACT
        render(<CookiesDialog {...props} />)
        const buttonElement = screen.getByRole('button', {
          name: /learn more about our cookies/i,
        });
        // ASSERT
        expect(buttonElement).toBeInTheDocument();
    })

    it('describe el caso de test', async () => {
      // ARRANGE
      const props = {
        onAgreeClick: () => {}
      }
      // ACT
      render(<CookiesDialog {...props} />)
      const buttonElement = screen.getByRole('button', {
        name: /learn more about our cookies/i,
      });
      await userEvent.click(buttonElement);

      const dialogElement = screen.getByRole("dialog");
      // ASSERT
      expect(dialogElement).toBeInTheDocument();
  })

  it('describe el caso de test', async () => {
    // ARRANGE
    const props = {
      onAgreeClick: jest.fn(),
    }
    // ACT
    render(<CookiesDialog {...props} />)
    const buttonElement = screen.getByRole('button', {
      name: /learn more about our cookies/i,
    });
    await userEvent.click(buttonElement);

    const dialogElement = screen.getByRole("dialog");

    //const agreeButton = screen.getByRole("button", {name:"Agree"});
    const agreeButton = within(dialogElement).getByRole('button', {name:"Agree"});
    await userEvent.click(agreeButton);
    // ASSERT
    expect(props.onAgreeClick).toHaveBeenCalled();
})
});
