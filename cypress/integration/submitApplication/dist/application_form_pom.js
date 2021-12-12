"use strict";
exports.__esModule = true;
exports.ApplicationPageObjectModel = void 0;
var ApplicationPageObjectModel = /** @class */ (function () {
    function ApplicationPageObjectModel() {}
    // page actions
    ApplicationPageObjectModel.insertFirstName = function (firstname) {
        cy.get(ApplicationPageObjectModel.firstNameTxt)
            .type(firstname);
    };
    ApplicationPageObjectModel.insertLastName = function (lastname) {
        cy.get(ApplicationPageObjectModel.lastNameTxt)
            .type(lastname);
    };
    ApplicationPageObjectModel.insertEmail = function (email) {
        cy.get(ApplicationPageObjectModel.emailTxt)
            .type(email);
    };
    ApplicationPageObjectModel.tickMaleRadioButton = function () {
        cy.get(ApplicationPageObjectModel.maleRb)
            .click();
    };
    ApplicationPageObjectModel.insertMobileNumber = function (mobileNumber) {
        cy.get(ApplicationPageObjectModel.userNumberTxt)
            .type(mobileNumber);
    };
    ApplicationPageObjectModel.insertDateOfBirth = function (dateOfBirth) {
        cy.get(ApplicationPageObjectModel.dateOfBirthDp)
            .type('{selectall}')
            .type(dateOfBirth)
            .type('{enter}');
    };
    ApplicationPageObjectModel.insertSubjects = function (subjects) {
        cy.get(ApplicationPageObjectModel.subjectsTxt)
            .type(subjects + '{enter}');
    };
    ApplicationPageObjectModel.tickMusicCheckbox = function () {
        cy.get(ApplicationPageObjectModel.musicChkB)
            .click();
    };
    ApplicationPageObjectModel.uploadStudentPicture = function (picture) {
        cy.get(ApplicationPageObjectModel.uploadPictureBtn)
            .attachFile(picture);
    };
    ApplicationPageObjectModel.insertAddress = function (address) {
        cy.get(ApplicationPageObjectModel.addressTxt)
            .type(address);
    };
    ApplicationPageObjectModel.insertState = function (state) {
        cy.get(ApplicationPageObjectModel.stateDrpD)
            .type(state + '{enter}');
    };
    ApplicationPageObjectModel.insertCity = function (city) {
        cy.get(ApplicationPageObjectModel.ctyDrpD)
            .type(city + '{enter}');
    };
    ApplicationPageObjectModel.clickSubmitBtn = function () {
        cy.get(ApplicationPageObjectModel.submitBtn)
            .click();
    };
    ApplicationPageObjectModel.clickSubmitCloseBtn = function () {
        cy.get(ApplicationPageObjectModel.submitCloseBtn)
            .click();
    };
    // page elements
    ApplicationPageObjectModel.firstNameTxt = '#firstName';
    ApplicationPageObjectModel.lastNameTxt = '#lastName';
    ApplicationPageObjectModel.emailTxt = '#userEmail';
    ApplicationPageObjectModel.maleRb = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label';
    ApplicationPageObjectModel.userNumberTxt = '#userNumber';
    ApplicationPageObjectModel.dateOfBirthDp = '#dateOfBirthInput';
    ApplicationPageObjectModel.subjectsTxt = '.subjects-auto-complete__value-container';
    ApplicationPageObjectModel.musicChkB = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label';
    ApplicationPageObjectModel.uploadPictureBtn = '[id="uploadPicture"]';
    ApplicationPageObjectModel.addressTxt = '#currentAddress';
    ApplicationPageObjectModel.stateDrpD = '#state > .css-yk16xz-control > .css-1hwfws3';
    ApplicationPageObjectModel.ctyDrpD = '#city > .css-yk16xz-control > .css-1hwfws3';
    ApplicationPageObjectModel.submitBtn = '#submit';
    ApplicationPageObjectModel.submitFullNameTxt = 'tbody > :nth-child(1) > :nth-child(2)';
    ApplicationPageObjectModel.submitEmailTxt = 'tbody > :nth-child(2) > :nth-child(2)';
    ApplicationPageObjectModel.submitMaleTxt = 'tbody > :nth-child(3) > :nth-child(2)';
    ApplicationPageObjectModel.submitCellNumberTxt = 'tbody > :nth-child(4) > :nth-child(2)';
    ApplicationPageObjectModel.submitDateOfBirthTxt = 'tbody > :nth-child(5) > :nth-child(2)';
    ApplicationPageObjectModel.submitSubjectsTxt = 'tbody > :nth-child(6) > :nth-child(2)';
    ApplicationPageObjectModel.submitMusicHobbyTxt = 'tbody > :nth-child(7) > :nth-child(2)';
    ApplicationPageObjectModel.submitImgDropD = '#close-fixedban > img';
    ApplicationPageObjectModel.submitPictureTxt = 'tbody > :nth-child(8) > :nth-child(2)';
    ApplicationPageObjectModel.submitAddressTxt = 'tbody > :nth-child(9) > :nth-child(2)';
    ApplicationPageObjectModel.submitStateCityTxt = 'tbody > :nth-child(10) > :nth-child(2)';
    ApplicationPageObjectModel.submitCloseBtn = '#closeLargeModal';
    return ApplicationPageObjectModel;
}());
exports.ApplicationPageObjectModel = ApplicationPageObjectModel;
