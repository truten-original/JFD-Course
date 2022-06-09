const POSTS_URL = "https://jsonplaceholder.typicode.com/post";
let isLoading = false;
// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: "POST"
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log("result", result);
//         })
//         .catch((error) => {
//             console.log("error", error);
//         })
//         .finally(() => {
//             isLoading = false;
//         });
// };
// createNewPost();

async function createNewPost() {
    isLoading = true
    try {
        const postsResponse = await fetch(POSTS_URL)
        if (!postsResponse.ok) {
            throw new Error('error!!!!!!!!!!!!!!!!!!!!!!')
        }
        const posts = await postsResponse.json()
        console.log('posts', posts)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        isLoading = false
    }
}
createNewPost()