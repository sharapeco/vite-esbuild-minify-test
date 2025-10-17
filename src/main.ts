const config = {
	x: 10,
	y: 20,
	z: 30,
	f: () => {
		return 42;
	},
};

function fibonacci(n: number): number {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

export function myLib() {
	console.log(`Fibonacci of ${config.x} is ${fibonacci(config.x)}`);
}
