import * as React from "react";
import { render } from "react-testing-library";
import { unstable_StaticMenu as StaticMenu } from "../StaticMenu";

const props: Parameters<typeof StaticMenu>[0] = {
  unstable_stops: [],
  unstable_move: jest.fn(),
  "aria-label": "menu"
};

test("render", () => {
  const { baseElement } = render(<StaticMenu {...props} />);
  expect(baseElement).toMatchInlineSnapshot(`
<body>
  <div>
    <div
      aria-label="menu"
      aria-owns=""
      role="menu"
    />
  </div>
</body>
`);
});