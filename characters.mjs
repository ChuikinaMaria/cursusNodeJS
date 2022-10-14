export const characters = [
    "Frodo", "Bilbo", "legolas"
];

export function greet(character) {
    console.log('Goed zo, ' + character);
}

export default function log() {
    console.log('default export from characters.js')
}