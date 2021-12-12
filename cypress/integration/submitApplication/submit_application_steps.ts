import { ApplicationPageObjectModel } from "./application_form_pom";
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-file-upload';

const url = 'https://demoqa.com/automation-practice-form';
let addressApiResponse = '';

Given('I get address details from api', () => {
  // testing API request
  cy.request(
    {
      url: 'https://blue-robot.mocklab.io/address',
        auth: {
            'username': 'test1',
            'password' : 'test1'
      }
    }).then(response => {
        expect(response.body.address).to.equal('123 test street, Zonnebloem, Cape town, 8001.');
        addressApiResponse = response.body.address});
})

Given('I am at the test page', () => {
  cy.visit(url);
})

And('I insert the firstname value', () => {
  ApplicationPageObjectModel.insertFirstName('Corne');
})

And('I insert the lastname value', () => {
  ApplicationPageObjectModel.insertLastName('Loots');
})

And('I insert the email value', () => {
  ApplicationPageObjectModel.insertEmail('loots.corne77@gmail.com');
})

And('I tick the Male radio button', () => {
  ApplicationPageObjectModel.tickMaleRadioButton();
})

And('I insert the mobile number value', () => {
  ApplicationPageObjectModel.insertMobileNumber('0797728389');
})

And('I insert the date of birth value', () => {
  ApplicationPageObjectModel.insertDateOfBirth('08 May 1990');
})

And('I insert the subjects value', () => {
  ApplicationPageObjectModel.insertSubjects('Computer Science');
})

And('I tick the music checkbox', () => {
  ApplicationPageObjectModel.tickMusicCheckbox();
})

And('I upload the image file', () => {
  const filepath = 'HailHydra.jpg';

  ApplicationPageObjectModel.uploadStudentPicture(filepath);
})

And('I insert the current address value', () => {
  ApplicationPageObjectModel.insertAddress(addressApiResponse);
})

And('I select the state value', () => {
  ApplicationPageObjectModel.insertState('NCR');
})

And('I select the city value', () => {
  ApplicationPageObjectModel.insertCity('Delhi');
})

And('I click the submit button', () => {
  ApplicationPageObjectModel.clickSubmitBtn();

  // Assert
  cy.get(ApplicationPageObjectModel.submitFullNameTxt)
    .should('contain', 'Corne Loots');

  cy.get(ApplicationPageObjectModel.submitEmailTxt)
    .should('contain', 'loots.corne77@gmail.com');

  cy.get(ApplicationPageObjectModel.submitMaleTxt)
    .should('contain', 'Male');

  cy.get(ApplicationPageObjectModel.submitCellNumberTxt)
    .should('contain', '0797728389');

  cy.get(ApplicationPageObjectModel.submitDateOfBirthTxt)
    .should('contain', '08 May,1990');

  cy.get(ApplicationPageObjectModel.submitSubjectsTxt)
    .should('contain', 'Computer Science');

  cy.get(ApplicationPageObjectModel.submitMusicHobbyTxt)
    .should('contain', 'Music');

  cy.get(ApplicationPageObjectModel.submitImgDropD)
    .click();

  cy.get(ApplicationPageObjectModel.submitPictureTxt)
    .should('contain', 'HailHydra.jpg');

  cy.get(ApplicationPageObjectModel.submitAddressTxt)
    .should('contain', '123 test street, Zonnebloem, Cape town, 8001.');

  cy.get(ApplicationPageObjectModel.submitStateCityTxt)
    .should('contain', 'NCR Delhi');
})

Then('I close the summary form', () => {
  ApplicationPageObjectModel.clickSubmitCloseBtn();
})