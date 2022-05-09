# Pet Care

Solution for the JS Applications Exam at SoftUni.

It's my implementation of **Web Application** (SPA) using **JavaScript**. 

It's an app that dynamically displays content, based on user interaction, and supports user-profiles and **CRUD** operations, using **REST** service.

### Overview

The app allows visitors to **browse** different pets, including **name, breed, and age**.

Users can **register and login** with an **email** and **password**, which allows them to **create** their pet postcard.

Pet **creators** can also **`edit`** and **`delete`** their posts at any time.

### Technical Details

SoftUni provided the **HTML**, **CSS** files and the **server**. As well as the unit tests.

I implemented the functionallity using:
- [**`lit-html`**](https://lit.dev/docs/v1/lit-html/introduction/) - as templating library.
- [**`page.js`**](https://github.com/visionmedia/page.js) - for routing.

The **included REST service** comes with the following premade accounts.

```sh
{ "email": "peter@abv.bg", "password": "123456" }
{ "email": "john@abv.bg", "password": "123456" }
```

![JS Applications - February 2022 - Certificate](https://user-images.githubusercontent.com/103751145/167355892-94d35229-1ced-4c8b-805b-2bd9003fac87.jpeg)
