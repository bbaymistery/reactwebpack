module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          "runtime": "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      isDevelopment && "react-refresh/babel",
    ].filter(Boolean),
  };
};
