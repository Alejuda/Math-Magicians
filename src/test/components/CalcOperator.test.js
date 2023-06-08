import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CalcOperator from '../../components/CalcOperator';

describe('The CalcOperator component', () => {
  it('Renders orrectly', () => {
    render(<CalcOperator />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Matches the snapShot', () => {
    const tree = renderer.create(<CalcOperator operator="AC" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calls the eventHandler when clicked', () => {
    const handleClick = jest.fn();
    render(<CalcOperator operator="%" handleClick={handleClick} />);
    const operatorBtn = screen.getByRole('button', {
      name: '%',
    });
    userEvent.click(operatorBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
