
const params =
new URLSearchParams(
location.search
);

const collectionName =
params.get("name");

document.getElementById(
"collectionTitle"
).textContent =
collectionName;
