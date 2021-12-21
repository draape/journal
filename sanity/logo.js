import React from "react";

const siteName = process.env.SANITY_STUDIO_SITE_NAME;

const Logo = () => <div>{siteName}</div>;

export default Logo;
