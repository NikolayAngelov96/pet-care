import { html } from '../lib.js';
import { getPetById, deletePet, addDonation, getDonationCount, isUserDonated } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, onDelete, userData, donationCount, userDonated, onDonationHandler) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donationCount * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            ${userData
                ? html`
                <!-- Only for registered user and creator of the pets-->
                    <div class="actionBtn">
                        ${userData.id == pet._ownerId
                            ? html`
                                <a href="/edit/${pet._id}" class="edit">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                            : userDonated ? null : html`<a @click=${onDonationHandler} href="javascript:void(0)" class="donate">Donate</a>`
                        }
                        
                    </div>`
                
                : null
            }
            
        </div>
    </div>
</section>`

export async function detailsPage(ctx) {
    const userData = getUserData();

    const promiseAll = Promise.all([
        getPetById(ctx.params.id),
        getDonationCount(ctx.params.id),
        userData && isUserDonated(ctx.params.id, userData.id)
    ])

    const values = await promiseAll;

    const pet = values[0];
    const donationCount = values[1];
    const userDonated = values[2];

    ctx.render(detailsTemplate(pet, onDelete, userData, donationCount, userDonated, onDonationHandler));

    async function onDelete(e) {
        await deletePet(ctx.params.id);
        ctx.page.redirect('/');
    }

    async function onDonationHandler(e) {

        e.target.style.display = 'none';
        const petId = ctx.params.id;

        document.querySelector('.donation').textContent = `Donation: ${(donationCount + 1) * 100}$`

        await addDonation({petId});


    }
}