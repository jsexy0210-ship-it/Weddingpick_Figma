import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Pick } from "./components/Pick";
import { OurWedding } from "./components/OurWedding";
import { My } from "./components/My";
import { CommunityFeed, ContractVerify, Login, Onboarding, VendorDetail } from "./components/FlowScreens";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "search", Component: Search },
      { path: "explore", Component: Search },
      { path: "pick", Component: Pick },
      { path: "our-wedding", Component: OurWedding },
      { path: "my", Component: My },
      { path: "community", Component: CommunityFeed },
      { path: "vendor/:id", Component: VendorDetail },
      { path: "onboarding", Component: Onboarding },
      { path: "login", Component: Login },
      { path: "contract-verify", Component: ContractVerify },
    ],
  },
]);
