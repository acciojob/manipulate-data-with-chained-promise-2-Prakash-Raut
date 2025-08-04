const output = document.getElementById('output');
const arr = [1, 2, 3, 4];

new Promise((resolve) => {
    setTimeout(() => {
        resolve(arr);
    }, 3000);
})
.then((numbers) => {
	return new Promise((resolve) => {
		const evenArr = numbers.filter((num) => num % 2 === 0);
        setTimeout(() => {
            output.textContent = evenArr;
            resolve(evenArr);
        }, 1000);
    });
})
.then((evenArr) => {
    return new Promise((resolve) => {
        const doubledArr = evenArr.map((num) => num * 2);
        setTimeout(() => {
            output.textContent = doubledArr;
            resolve(doubledArr);
        }, 2000);
	});
});