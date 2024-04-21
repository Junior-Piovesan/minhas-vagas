import { render, screen } from '@testing-library/react';
import App from '../App';

describe("HealthTest",() => {

  it("Helth test",() => {
  
    render(<App/>);
    console.log("----Meu log")
    const title = screen.getByRole('heading', { level: 1 }).textContent;
    expect(title).toEqual("Minhas Vagas");
  
  });
});
