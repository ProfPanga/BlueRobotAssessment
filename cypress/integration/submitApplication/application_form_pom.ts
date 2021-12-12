export class ApplicationPageObjectModel {

  // page elements

  public static firstNameTxt = '#firstName';
  public static lastNameTxt = '#lastName';
  public static emailTxt = '#userEmail';
  public static maleRb = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label';
  public static userNumberTxt ='#userNumber';
  public static dateOfBirthDp = '#dateOfBirthInput';
  public static subjectsTxt = '.subjects-auto-complete__value-container';
  public static musicChkB = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label';
  public static uploadPictureBtn = '[id="uploadPicture"]';
  public static addressTxt = '#currentAddress';
  public static stateDrpD = '#state > .css-yk16xz-control > .css-1hwfws3';
  public static ctyDrpD = '#city > .css-yk16xz-control > .css-1hwfws3';
  public static submitBtn = '#submit';
  public static submitFullNameTxt = 'tbody > :nth-child(1) > :nth-child(2)';
  public static submitEmailTxt = 'tbody > :nth-child(2) > :nth-child(2)';
  public static submitMaleTxt =  'tbody > :nth-child(3) > :nth-child(2)';
  public static submitCellNumberTxt = 'tbody > :nth-child(4) > :nth-child(2)';
  public static submitDateOfBirthTxt = 'tbody > :nth-child(5) > :nth-child(2)';
  public static submitSubjectsTxt = 'tbody > :nth-child(6) > :nth-child(2)';
  public static submitMusicHobbyTxt = 'tbody > :nth-child(7) > :nth-child(2)';
  public static submitImgDropD = '#close-fixedban > img';
  public static submitPictureTxt = 'tbody > :nth-child(8) > :nth-child(2)';
  public static submitAddressTxt = 'tbody > :nth-child(9) > :nth-child(2)';
  public static submitStateCityTxt = 'tbody > :nth-child(10) > :nth-child(2)';
  public static submitCloseBtn = '#closeLargeModal';

  // page actions

  public static insertFirstName(firstname: string){
    cy.get(ApplicationPageObjectModel.firstNameTxt)
      .type(firstname);
  }

  public static insertLastName(lastname: string){
    cy.get(ApplicationPageObjectModel.lastNameTxt)
      .type(lastname);
  }

  public static insertEmail(email: string){
    cy.get(ApplicationPageObjectModel.emailTxt)
      .type(email);
  }

  public static tickMaleRadioButton(){
    cy.get(ApplicationPageObjectModel.maleRb)
      .click();
  }

  public static insertMobileNumber(mobileNumber: string){
    cy.get(ApplicationPageObjectModel.userNumberTxt)
      .type(mobileNumber);
  }

  public static insertDateOfBirth(dateOfBirth: string){
    cy.get(ApplicationPageObjectModel.dateOfBirthDp)
      .type('{selectall}')
      .type(dateOfBirth)
      .type('{enter}');
  }

  public static insertSubjects(subjects: string){
    cy.get(ApplicationPageObjectModel.subjectsTxt)
      .type(subjects + '{enter}');
  }

  public static tickMusicCheckbox(){
    cy.get(ApplicationPageObjectModel.musicChkB)
      .click();
  }

  public static uploadStudentPicture(picture: string){
    cy.get(ApplicationPageObjectModel.uploadPictureBtn)
      .attachFile(picture);
  }

  public static insertAddress(address: string){
    cy.get(ApplicationPageObjectModel.addressTxt)
      .type(address);
  }

  public static insertState(state: string){
    cy.get(ApplicationPageObjectModel.stateDrpD)
      .type(state + '{enter}');
  }

  public static insertCity(city: string){
    cy.get(ApplicationPageObjectModel.ctyDrpD)
      .type(city + '{enter}');
  }

  public static clickSubmitBtn(){
    cy.get(ApplicationPageObjectModel.submitBtn)
      .click();
  }

  public static clickSubmitCloseBtn(){
    cy.get(ApplicationPageObjectModel.submitCloseBtn)
    .click();
  }
}
