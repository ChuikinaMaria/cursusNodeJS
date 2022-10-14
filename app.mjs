async function main() {
    try {
        const { characters, greet } = await import("./characterss.mjs"); // опечатка
        for (const c of characters) {
            greet(c);
    }} catch(e) {
        console.log("Ошибочка вышла!")
    } 
};
main();