#PAYMENT GATEWAY INTEGRATION

#INTRODUCTION
The aim of this project is to build a MEAN/MERS stack application to collect payment
against existing invoices. The application should allow users to view a list of invoices
and make payments using Instamojo's payment gateway. The project structure should
be set up to display invoices, process payments, and update invoices accordingly.

#USER FLOW
1. The user visits the platform and views a list of invoices.
2. The user selects the invoice they want to pay and clicks on the "Pay Now"
button.
3. The application calls Instamojo's APIs to create a payment link and redirects the
user to the Instamojo payment page.
4. The user enters their payment details on the Instamojo payment page and
confirms the transaction.
5. Instamojo securely processes the payment and sends a webhook to the
application.
6. Upon receiving the webhook, the platform marks the invoice as paid and
updates the payment details on the invoice.

Technical Requirements:
1. The application should be built using MEAN/MERS stack.
2. A schema should be created for invoices to store basic invoice details such as
amount, item, status, etc.
3. An API should be written to display the invoices in the UI.

4. The application should support both cases of Instamojo's convenience fee
option (enabled and disabled).
5. Webhooks sent by Instamojo should be captured and processed to update the
invoice status.
6. The code should be well-structured, commented, and easily maintainable.

How to get started
1. Visit https://test.instamojo.com
2. Create an account using your personal email address. (Enter BMYPR1625P as a
pan number if you are not comfortable entering your PAN details)
3. Review the API documentation and make a plan for the integration.
4. Setup codebase, create invoice schema, create dummy data and insert it in the
invoice collection
5. Build a module to display invoices.
6. Build a module to enable users to make payments.
7. Write code to capture webhooks and update invoice on successful payment.
8. Host the application on any free platform of your choice like Heroku.