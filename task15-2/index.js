const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults);
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
async function getTodosByIds(ids) {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    const responses = await Promise.all(requests)
    const dataResults = responses.map(result => result.json())
    const allTasks = await Promise.all(dataResults)
    console.log(allTasks)
}






getTodosByIds([43, 21, 55, 100, 10]);
