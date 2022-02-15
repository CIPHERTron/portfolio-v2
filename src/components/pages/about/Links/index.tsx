import MotionBox from "components/motion/MotionBox";
import MotionFlex from "components/motion/MotionFlex";

import {
  socialLinks,
  staggerAnimationProps,
  wrapperAnimationProps,
} from "./constants";
import MotionLink from "./MotionLink";

const Links = () => {
  return (
    <MotionBox mb={2} {...wrapperAnimationProps}>
      <MotionFlex
        wrap="wrap"
        gridGap={4}
        marginTop={2}
        {...staggerAnimationProps}
      >
        {socialLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionFlex>
    </MotionBox>
  );
};

export default Links;
