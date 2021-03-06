let Prescription = require("../src/prescription.js");

describe('Creating a new Pharmacist', function() {

  beforeEach(function() {
    prescription = new Prescription("Bob", "Jim", "Morphine");
  });

  it("assigns a doctor, a patient, and the drug (or drugs) to the Prescription initialization", function() {
    expect(prescription.doctor.name).toEqual("Jim");
    expect(prescription.patient.name).toEqual("Bob");
    expect(prescription.prescription).toEqual("Morphine");
  });
});
