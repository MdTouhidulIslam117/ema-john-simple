import androids from "./android";
import cameras from "./camera";
import laptops from "./laptops";

const fakeData = [...androids, ...cameras, ...laptops]


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * 1);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];   
    }
}

shuffle(fakeData);

export default fakeData;