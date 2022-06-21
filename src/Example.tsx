import { styled } from "@stitches/react";

// It seems that importing from the package or a custom config
// makes no difference, concerning this TS error.
// import { styled } from "./stitches.config";

const StyledExampleBase = styled("div", {});
const StyledExample = styled(StyledExampleBase, {});

const Example = () => <StyledExample as="span" />;

export default Example;
