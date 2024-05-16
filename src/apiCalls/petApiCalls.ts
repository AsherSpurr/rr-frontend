import { Pet }from "../utils/interfaces";

function postPet(pet: Pet) {
    return fetch("https://8deefa6e-9aee-47e2-b8ea-a4dd591b3fc3.mock.pstmn.io/api/v1/pets", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    })
    .then(res => {res.json()})
}

function postMedication(pet: Pet) {
    return fetch("https://8deefa6e-9aee-47e2-b8ea-a4dd591b3fc3.mock.pstmn.io/api/v1/pet_medications", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    })
    .then(res => {res.json()})
}

function postRingworm(pet: Pet) {
    return fetch("https://8deefa6e-9aee-47e2-b8ea-a4dd591b3fc3.mock.pstmn.io/api/v1/pet_ringworms", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    })
    .then(res => {res.json()})
}

export default postPet; postRingworm; postMedication;