import Patient from "@models/PatientModel";
import DetailsField from "./DetailsField";
import { BirthIcon, FemaleIcon, InsuranceIcon, MaleIcon, PhoneIcon } from "@assets/icons";
import { formatDate } from "@utils/commanHelpers";

interface PatientDetailsProps {
  patient: Patient;
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-start items-center">
        <img
          className="w-48 h-48 object-cover mb-6"
          src={patient.profile_picture}
          alt={patient.name}
        />
        <h2 className="mb-8 text-2xl font-semibold">{patient.name}</h2>
      </div>

      <div className="mb-10">
        <DetailsField title="Date of Birth" text={formatDate(patient.date_of_birth)} prefixIcon={BirthIcon} prefixIconSize='' switchBoldness={true}/>
        <DetailsField title="Gender" text={patient.gender} prefixIcon={patient.gender === "Female"? FemaleIcon : MaleIcon} prefixIconSize='' switchBoldness={true}/>
        <DetailsField title="Contact Info" text={patient.phone_number} prefixIcon={PhoneIcon} prefixIconSize='' switchBoldness={true}/>
        <DetailsField title="Emergency Contact" text={patient.emergency_contact} prefixIcon={PhoneIcon} prefixIconSize='' switchBoldness={true}/>
        <DetailsField title="Insurance Provider" text={patient.insurance_type} prefixIcon={InsuranceIcon} prefixIconSize='' switchBoldness={true}/>
      </div>

      <button className="mb-8 p-3 font-semibold rounded-full bg-accent text-accent-dark">
        Show All Information
      </button>

    </section>
  )
}
