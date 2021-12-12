"use strict";
exports.__esModule = true;
var application_form_pom_1 = require("./application_form_pom");
var steps_1 = require("cypress-cucumber-preprocessor/steps");
require("cypress-file-upload");
var url = 'https://demoqa.com/automation-practice-form';
var addressApiResponse = '';
steps_1.Given('I get address details from api', function () {
    // testing API request
    cy.request({
        url: 'https://blue-robot.mocklab.io/address',
        auth: {
            'username': 'test1',
            'password': 'test1'
        }
    }).then(function (response) {
        expect(response.body.address).to.equal('123 test street, Zonnebloem, Cape town, 8001.');
        addressApiResponse = response.body.address;
    });
});
steps_1.Given('I am at the test page', function () {
    cy.visit(url);
});
steps_1.And('I insert the firstname value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertFirstName('Corne');
});
steps_1.And('I insert the lastname value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertLastName('Loots');
});
steps_1.And('I insert the email value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertEmail('loots.corne77@gmail.com');
});
steps_1.And('I tick the Male radio button', function () {
    application_form_pom_1.ApplicationPageObjectModel.tickMaleRadioButton();
});
steps_1.And('I insert the mobile number value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertMobileNumber('0797728389');
});
steps_1.And('I insert the date of birth value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertDateOfBirth('08 May 1990');
});
steps_1.And('I insert the subjects value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertSubjects('Computer Science');
});
steps_1.And('I tick the music checkbox', function () {
    application_form_pom_1.ApplicationPageObjectModel.tickMusicCheckbox();
});
steps_1.And('I upload the image file', function () {
    var filepath = 'HailHydra.jpg';
    application_form_pom_1.ApplicationPageObjectModel.uploadStudentPicture(filepath);
});
steps_1.And('I insert the current address value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertAddress(addressApiResponse);
});
steps_1.And('I select the state value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertState('NCR');
});
steps_1.And('I select the city value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertCity('Delhi');
});
steps_1.And('I click the submit button', function () {
    application_form_pom_1.ApplicationPageObjectModel.clickSubmitBtn();
    // Assert
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitFullNameTxt)
        .should('contain', 'Corne Loots');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitEmailTxt)
        .should('contain', 'loots.corne77@gmail.com');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitMaleTxt)
        .should('contain', 'Male');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitCellNumberTxt)
        .should('contain', '0797728389');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitDateOfBirthTxt)
        .should('contain', '08 May,1990');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitSubjectsTxt)
        .should('contain', 'Computer Science');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitMusicHobbyTxt)
        .should('contain', 'Music');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitImgDropD)
        .click();
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitPictureTxt)
        .should('contain', 'HailHydra.jpg');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitAddressTxt)
        .should('contain', '123 test street, Zonnebloem, Cape town, 8001.');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitStateCityTxt)
        .should('contain', 'NCR Delhi');
});
steps_1.Then('I close the summary form', function () {
    application_form_pom_1.ApplicationPageObjectModel.clickSubmitCloseBtn();
});
