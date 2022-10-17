const importClubActivities = (r) => {
     let images = [];
     r.keys().map(item => {
        images.push(r(item));
        return 0;
     });
     return images;
}

export const clubActiveImgs = importClubActivities(require.context('./', false, /\.jpeg/));

export const clubActiveFix = importClubActivities(require.context('./', false, /\.png/));

export default clubActiveImgs;
