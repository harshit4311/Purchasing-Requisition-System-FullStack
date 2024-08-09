# Full-Stack Purchasing Requisition System Web Application

## Frontend:
1. #### Dashboard:

Includes a collapsible sidebar.
The main body features a sticky top bar with a search bar.

2. #### Search Functionality:

Autocomplete feature that fetches sample products from the backend using Axios or Fetch.

3. #### Routing:

Use ```react-router-dom``` for navigation between different views.

4. #### New Item Page:

- A form to request a product with the following fields:

  - Supplier Name

  - Product Information (text and URL)

  - Category (dropdown fetched from an API)

  - Quantity Required (number input)

  - Timeline (date picker)

  - Location (dropdown fetched from an API)

5. Form Submission:

- Validate the form data.
- Submit the form via POST request using Axios or Fetch.
- Save data to the database.

## Backend:
1. #### API:
- Built using Node.js
- Handle form submissions and fetch options for dropdown fields from an API.

2. #### Database:

- Used MySQL Database
- Used an ORM (Object Relational Mapper).
