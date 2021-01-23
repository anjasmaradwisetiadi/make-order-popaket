import plugin from 'tailwindcss/plugin';

export const headingsPlugin = plugin(({ addBase, config }: any) => {
  const sizes = ['4xl', '3xl', '2xl', 'xl', 'lg', 'base'];

  const headings = sizes.reduce((acc, size, index) => {
    const [fontSize, { lineHeight }] = config(`theme.fontSize.${size}`);

    return {
      ...acc,
      [`h${index + 1}`]: {
        'font-size': fontSize,
        'line-height': lineHeight,
      },
    };
  }, {});

  addBase(headings);
});

export default headingsPlugin;
