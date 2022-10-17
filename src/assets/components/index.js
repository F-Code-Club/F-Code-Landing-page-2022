const importArrows = (r) => {
    let images = {};
    r.keys().map(item => {
        images[item.replace('./', '')] = r(item);
        return 0;
    });
    return images;
}

export const arrows = importArrows(require.context('./', false, /\.svg/));

export default arrows;
