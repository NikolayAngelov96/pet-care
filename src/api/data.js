import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPets() {
    return await api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPet(pet) {
    await api.post('/data/pets', pet)
}

export async function getPetById(id) {
    return await api.get(`/data/pets/${id}`);
}

export async function editPet(id, pet) {
    await api.put(`/data/pets/${id}`, pet)
}

export async function deletePet(id) {
    await api.del(`/data/pets/${id}`);
}

export async function addDonation(petId) {
    await api.post('/data/donation', petId);
}

export async function getDonationCount(petId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function isUserDonated(petId, userId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}