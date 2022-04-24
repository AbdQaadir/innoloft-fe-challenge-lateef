import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import { Pane, majorScale } from "evergreen-ui";

const StyledLayout = styled(Pane)`
  width: 100%;
  height: 100vh;

  .body {
    height: 89vh;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};
function AppLayout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Pane height="10vh">
        <Header />
      </Pane>
      <Pane className="body row">
        <Pane className="" overflowX="hidden">
          <Sidebar />
        </Pane>

        <Pane
          flex={1}
          paddingY={majorScale(5)}
          paddingX={majorScale(3)}
          overflowY="scroll"
          height="100%"
        >
          {children}
        </Pane>
      </Pane>
    </StyledLayout>
  );
}

export default AppLayout;
