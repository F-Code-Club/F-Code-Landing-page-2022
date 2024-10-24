const importClubActivities = (r) => {
     let images = [];
     r.keys().map(item => {
        images.push(r(item));
        return 0;
     });
     return images;
}

// export const clubActiveImgs = importClubActivities(require.context('./', false, /\.jpeg/));

// export const clubActiveFix = importClubActivities(require.context('./', false, /\.png/));

export const clubActiveImgs = importClubActivities(
   require.context('./fcode-2024', false, /\.(jpg|jpeg|png)$/)
 ).reverse();
export default clubActiveImgs
