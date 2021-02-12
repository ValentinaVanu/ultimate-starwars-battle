import { render } from '@testing-library/react'
import { Intro } from '../component/intro'
jest.mock("react-redux", () => ({
  useDispatch: f => f,
  useSelector: (f) => []
}))

describe("Intro component", () => {
  it("should render properly", () => {
    const component = render(<Intro />)
    expect(component).toMatchSnapshot()
  })
})
