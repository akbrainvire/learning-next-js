// example for redirect
// This can be used let say website is down due to maintenance then we can use this to redirect for every route
//

module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, // permanent route redirect or temperory redirect permanent = false.
      },
    ];
  },
};
